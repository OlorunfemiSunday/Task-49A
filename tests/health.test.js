// tests/health.test.js
const request = require("supertest");
const app = require("../server"); // or "../app" depending on file name

describe("GET /api/health", () => {
  it("should return status OK", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ status: "OK" });
  });
});
