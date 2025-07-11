import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static("."));

app.post("/api/rock", (req, res) => {
  const { input } = req.body;
  const reply = `Let's clarify that Rock: "${input}"`;
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
