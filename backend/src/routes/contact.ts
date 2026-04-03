import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

// ─── Input validation ─────────────────────────────────────
function validateInput(name: string, email: string, message: string): string | null {
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (!email || typeof email !== 'string') {
    return 'Email is required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please provide a valid email address';
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return 'Message must be at least 10 characters';
  }
  return null;
}

// ─── POST /api/contact ───────────────────────────────────
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { name, email, message } = req.body;

  // Validate
  const validationError = validateInput(name, email, message);
  if (validationError) {
    res.status(400).json({ error: validationError });
    return;
  }

  // Check env vars
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ EMAIL_USER or EMAIL_PASS not set in .env');
    res.status(500).json({ error: 'Email service not configured. Please contact me directly.' });
    return;
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email to portfolio owner
  const ownerMailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    replyTo: email.trim(),
    subject: `📬 New Portfolio Message from ${name.trim()}`,
    html: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: 'Inter', Arial, sans-serif; background: #0a0f1e; color: #f0f4ff; padding: 20px;">
          <div style="max-width: 560px; margin: 0 auto; background: #1e2a45; border-radius: 16px; overflow: hidden; border: 1px solid rgba(99,102,241,0.3);">
            <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 1.4rem; color: #fff;">New Portfolio Contact</h1>
            </div>
            <div style="padding: 28px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #94a3b8; font-size: 0.85rem; width: 100px;">Name</td>
                  <td style="padding: 10px 0; color: #f0f4ff; font-weight: 600;">${name.trim()}</td>
                </tr>
                <tr style="border-top: 1px solid rgba(255,255,255,0.08);">
                  <td style="padding: 10px 0; color: #94a3b8; font-size: 0.85rem;">Email</td>
                  <td style="padding: 10px 0; color: #818cf8;">${email.trim()}</td>
                </tr>
                <tr style="border-top: 1px solid rgba(255,255,255,0.08);">
                  <td style="padding: 10px 0; color: #94a3b8; font-size: 0.85rem; vertical-align: top;">Message</td>
                  <td style="padding: 10px 0; color: #f0f4ff; line-height: 1.7;">${message.trim().replace(/\n/g, '<br>')}</td>
                </tr>
              </table>
              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 0.8rem; color: #64748b; text-align: center;">
                Sent from Vemula Chakravarthy's Portfolio • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  // Auto-reply to sender
  const autoReplyOptions = {
    from: `"Vemula Chakravarthy" <${process.env.EMAIL_USER}>`,
    to: email.trim(),
    subject: `Thanks for reaching out, ${name.trim()}! 🙏`,
    html: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: 'Inter', Arial, sans-serif; background: #f8faff; padding: 20px;">
          <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 24px rgba(0,0,0,0.06);">
            <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 1.3rem; color: #fff;">Message Received! 🎉</h1>
            </div>
            <div style="padding: 28px;">
              <p style="color: #0f172a; font-size: 1rem; margin-bottom: 1rem;">Hi <strong>${name.trim()}</strong>,</p>
              <p style="color: #475569; line-height: 1.8; margin-bottom: 1rem;">
                Thank you for reaching out! I've received your message and will get back to you as soon as possible — usually within 24–48 hours.
              </p>
              <div style="background: #f8faff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 1.5rem;">
                <p style="color: #64748b; font-size: 0.82rem; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">Your message</p>
                <p style="color: #0f172a; line-height: 1.7; margin: 0;">${message.trim().replace(/\n/g, '<br>')}</p>
              </div>
              <p style="color: #475569; font-size: 0.9rem; line-height: 1.7;">
                In the meantime, feel free to check out my
                <a href="https://github.com/Chakri-2005" style="color: #6366f1;">GitHub</a> or
                <a href="https://www.linkedin.com/in/chakravarthy-vemula-379158308/" style="color: #6366f1;">LinkedIn</a>.
              </p>
              <p style="color: #0f172a; margin-top: 1.5rem; font-weight: 600;">Best regards,<br/>Vemula Chakravarthy</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(autoReplyOptions);

    console.log(`✅ Contact email sent from ${email.trim()}`);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      error: 'Failed to send email. Please try again or contact me directly at chakravarthyvemula25@gmail.com',
    });
  }
});

export default router;
