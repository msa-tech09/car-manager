import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
};
