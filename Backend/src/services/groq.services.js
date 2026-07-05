const axios = require("axios");

const analyzeResumeWithGroq = async (resumeText, jobDescription) => {
  const prompt = `
You are an ATS resume analyzer.

Compare the resume with the job description.

Return ONLY raw JSON.
Do not use markdown.
Do not use \`\`\`json.
Do not add any explanation.

Resume:
${resumeText}

Job Description:
${jobDescription}

Return JSON exactly in this format:
{
  "atsScore": 0,
  "matchedSkills": [],
  "missingSkills": [],
  "suggestions": [],
  "recommendedKeywords": []
}
`;

  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  let aiContent = response.data.choices[0].message.content;

  aiContent = aiContent
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(aiContent);
};

module.exports = analyzeResumeWithGroq;