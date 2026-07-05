const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "ResumeLens backend is running",
  });
});
const resumeRoutes = require("./routes/resume.routes");

app.use("/api/resume", resumeRoutes);

module.exports = app;