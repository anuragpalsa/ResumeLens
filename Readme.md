# ResumeLens - AI Resume Analyzer

ResumeLens is an AI-powered ATS-based resume evaluation platform that analyzes a resume against a given job description and generates an ATS score, matched skills, missing skills, improvement suggestions, and recommended keywords.

## Features

- Upload resume in PDF format
- Extract resume text from PDF
- Paste job description
- Analyze resume using Groq AI API
- Generate ATS score
- Show matched skills
- Show missing skills
- Provide improvement suggestions
- Recommend important keywords
- Futuristic responsive UI
- File cleanup after analysis for better privacy

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- Multer
- pdf-parse
- Groq API

### Database
- MongoDB Atlas

### Deployment
- Frontend: Vercel
- Backend: Render

## Project Structure

```text
ResumeLens/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── uploads/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md