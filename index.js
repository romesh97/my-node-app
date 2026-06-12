const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello from Express running in Docker!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
