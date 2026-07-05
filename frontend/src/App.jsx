import { useState } from "react";

function App() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Resume File:", resume);
    console.log("Job Description:", jobDescription);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white px-4 py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        <nav className="flex justify-between items-center mb-14">
          <h2 className="text-2xl font-bold tracking-wide">
            Resume<span className="text-cyan-400">Lens</span>
          </h2>

          <span className="text-sm text-gray-400 border border-white/10 px-4 py-2 rounded-full">
            AI ATS Analyzer
          </span>
        </nav>

        <section className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-sm">
            Smart Resume Evaluation Platform
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Analyze Your Resume with{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI Precision
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg">
            Upload your resume, paste a job description, and get ATS score,
            missing skills, matched keywords, and improvement suggestions.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-semibold mb-2">Upload Resume</h3>
            <p className="text-gray-400 text-sm mb-6">
              Upload your resume in PDF format for text extraction.
            </p>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-cyan-400/40 rounded-2xl p-10 cursor-pointer hover:border-cyan-300 hover:bg-cyan-400/5 transition">
              <div className="text-5xl mb-4">📄</div>

              <p className="text-gray-300 font-medium">
                {resume ? resume.name : "Click to upload PDF"}
              </p>

              <p className="text-xs text-gray-500 mt-2">
                Only PDF files are supported
              </p>

              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setResume(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-semibold mb-2">Job Description</h3>
            <p className="text-gray-400 text-sm mb-6">
              Paste the job role details to compare with your resume.
            </p>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows="12"
              placeholder="Paste job description here..."
              className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-10 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition shadow-lg shadow-cyan-500/20"
          >
            Analyze Resume with AI
          </button>
        </div>

        <div className="mt-14 grid md:grid-cols-4 gap-4">
          {[
            "ATS Score",
            "Matched Skills",
            "Missing Skills",
            "AI Suggestions",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-center"
            >
              <p className="text-cyan-300 text-sm">{item}</p>
              <p className="text-gray-500 text-xs mt-2">Coming in analysis</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;