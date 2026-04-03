import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRouter from './routes/contact';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json({ limit: '10kb' }));

// ─── Routes ──────────────────────────────────────────────
app.use('/api/contact', contactRouter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Portfolio backend is running' });
});

// ─── 404 handler ─────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ─── Start server ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📬 Contact endpoint: POST http://localhost:${PORT}/api/contact\n`);
});

export default app;
