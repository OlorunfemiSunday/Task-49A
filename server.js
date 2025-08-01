// server.js
const express = require("express");
const dotenv = require("dotenv");
const healthRoute = require("./routes/health");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", healthRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
