import { useState, FormEvent } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    else if (form.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email';

    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ type: 'loading', message: '' });

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: "Message sent! I'll get back to you soon. 🎉" });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not reach the server. Please email me directly at chakravarthyvemula25@gmail.com',
      });
    }
  };

  const contactInfo = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'chakravarthyvemula25@gmail.com', href: 'mailto:chakravarthyvemula25@gmail.com' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 8897931310', href: 'tel:+918897931310' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Vijayawada, Andhra Pradesh, India', href: '#' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/Chakri-2005', href: 'https://github.com/Chakri-2005' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'Chakravarthy Vemula', href: 'https://www.linkedin.com/in/chakravarthy-vemula-379158308/' },
    { icon: 'fas fa-code', label: 'LeetCode', value: 'Chakravarthy_Vemula', href: 'https://leetcode.com/u/Chakravarthy_Vemula/' },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's talk!</p>

        <div className="contact-grid">
          {/* Left Info Panel */}
          <div className="contact-info-panel">
            <div className="contact-intro">
              <h3>Let's Connect</h3>
              <p>
                I'm actively looking for internship and full-time opportunities. Whether you have a
                question, want to collaborate, or just say hi — my inbox is always open!
              </p>
            </div>

            <div className="contact-info-list">
              {contactInfo.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact-info-item"
                >
                  <div className="contact-info-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <span className="contact-info-label">{item.label}</span>
                    <span className="contact-info-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form-card">
            <h3 className="form-title">Send a Message</h3>

            {status.type === 'success' && (
              <div className="form-alert success">
                <i className="fas fa-check-circle"></i> {status.message}
              </div>
            )}
            {status.type === 'error' && (
              <div className="form-alert error">
                <i className="fas fa-exclamation-circle"></i> {status.message}
              </div>
            )}

            <form id="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className={`form-group${errors.name ? ' has-error' : ''}`}>
                  <label htmlFor="contact-name">Your Name</label>
                  <div className="input-wrapper">
                    <i className="fas fa-user input-icon"></i>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Vemula Chakravarthy"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className={`form-group${errors.email ? ' has-error' : ''}`}>
                  <label htmlFor="contact-email">Your Email</label>
                  <div className="input-wrapper">
                    <i className="fas fa-envelope input-icon"></i>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className={`form-group${errors.message ? ' has-error' : ''}`}>
                <label htmlFor="contact-message">Your Message</label>
                <div className="input-wrapper textarea-wrapper">
                  <i className="fas fa-comment-dots input-icon textarea-icon"></i>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Hi Chakravarthy, I'd love to discuss..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="btn btn-primary submit-btn"
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? (
                  <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                ) : (
                  <><i className="fas fa-paper-plane"></i> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
