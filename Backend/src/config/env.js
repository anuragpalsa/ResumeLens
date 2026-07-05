require("dotenv").config();

const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  GROQ_API_KEY: process.env.GROQ_API_KEY,
};

module.exports = env;