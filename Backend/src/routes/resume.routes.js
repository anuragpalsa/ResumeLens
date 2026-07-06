const express = require("express");
const upload = require("../middleware/upload.middleware");
const extractTextFromPDF = require("../utils/pdfparsers");
const analyzeResumeWithGroq = require("../services/groq.services");
const fs = require("fs");

const router = express.Router();

router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume PDF is required",
      });
    }

    const resumeText = await extractTextFromPDF(req.file.path);

    res.status(200).json({
      success: true,
      message: "Resume text extracted successfully",
      fileName: req.file.originalname,
      resumeText,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "PDF text extraction failed",
      error: error.message,
    });
  }
});

router.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    const { jobDescription } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume PDF is required",
      });
    }

    if (!jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Job description is required",
      });
    }

    const resumeText = await extractTextFromPDF(req.file.path);

const analysis = await analyzeResumeWithGroq(
  resumeText,
  jobDescription
);

// Analysis complete hone ke baad uploaded PDF delete kar rahe hain
if (req.file && fs.existsSync(req.file.path)) {
  fs.unlinkSync(req.file.path);
}

res.status(200).json({
  success: true,
  message: "Resume analyzed successfully",
  fileName: req.file.originalname,
  analysis,
});
} catch (error) {
  // Error aane par bhi uploaded PDF delete kar rahe hain
  if (req.file && fs.existsSync(req.file.path)) {
    fs.unlinkSync(req.file.path);
  }

  res.status(500).json({
    success: false,
    message: "Resume analysis failed",
    error: error.message,
  });
}
});
module.exports = router;