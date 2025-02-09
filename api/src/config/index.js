require("dotenv").config();

const env = process.env.NODE_ENV;
const config = {
  env: env || "dev",
  isProd: process.env.NODE_ENV === "production",
  port: process.env.PORT || 3000,
  dbUrl: env === "test" ? process.env.MONGO_URL_TEST : process.env.MONGO_URL,
  dbName: process.env.MONGO_DB_NAME,
};

module.exports = { config };
