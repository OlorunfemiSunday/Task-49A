// routes/health.js
const express = require("express");
const router = express.Router();

// Health check route for CI/CD verification
router.get("/health", (req, res) => {
  res.json({ status: "OK" }); // Confirm status
});

module.exports = router;
