const fs = require("fs");
const { PDFParse } = require("pdf-parse");

const extractTextFromPDF = async (filePath) => {
  const pdfBuffer = fs.readFileSync(filePath);

  const parser = new PDFParse({ data: pdfBuffer });
  const result = await parser.getText();

  return result.text;
};

module.exports = extractTextFromPDF;