import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { evaluateEssayWithGemini } from './src/server/geminiEvaluator.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// API routes
app.post('/api/evaluate-essay', async (req, res) => {
  try {
    const evaluation = await evaluateEssayWithGemini(req.body);
    res.json(evaluation);
  } catch (error: any) {
    console.error('Error evaluating essay in server:', error);
    res.status(500).json({ error: error?.message || 'Error evaluating essay' });
  }
});

// Serve static frontend files from dist
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (_req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
