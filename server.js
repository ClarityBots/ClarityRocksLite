import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;

// Setup __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the root folder
app.use(express.static(__dirname));

// API Endpoint
app.post('/api/chat', (req, res) => {
  const { prompt } = req.body;

  // Placeholder AI logic
  const response = `Let's clarify that Rock: "${prompt}" — What’s the measurable result?`;

  res.json({ response });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
