const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const intercom = axios.create({
  baseURL: "https://api.intercom.io",
  headers: {
    Authorization: `Bearer ${process.env.INTERCOM_TOKEN}`,
    Accept: "application/json"
  }
});

// Mock endpoints for now

app.get("/api/conversations", async (req, res) => {
  res.json({ total: 8742 });
});

app.get("/api/users", async (req, res) => {
  res.json({ total: 3218 });
});

app.get("/api/completion-rate", async (req, res) => {
  res.json({ completionRate: "92.0" });
});

app.get("/api/dropoff-rate", async (req, res) => {
  res.json({ dropoffRate: "14.0" });
});

app.get("/api/fallback-rate", async (req, res) => {
  res.json({ fallbackRate: "12.0" });
});

app.get("/api/escalation-rate", async (req, res) => {
  res.json({ escalationRate: "8.0" });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
