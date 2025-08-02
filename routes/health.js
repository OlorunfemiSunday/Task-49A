// routes/health.js
const express = require("express");
const router = express.Router();

// Health check route for CI/CD verification
router.get("/health", (req, res) => {
  res.json({ status: "OK" }); // Confirm status
});

// tests/health.test.js
const request = require("supertest");
const app = require("../server"); // Adjust path if your entry file is named differently

describe("GET /api/health", () => {
  it("should return status OK", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ status: "OK" });
  });
});

module.exports = router;
