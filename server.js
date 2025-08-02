// server.js
const express = require("express");
const app = express();
const healthRouter = require("./routes/health");

app.use(express.json());
app.use("/api/health", healthRouter);

// Export app for testing
module.exports = app;

// Only start server if not being tested
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
