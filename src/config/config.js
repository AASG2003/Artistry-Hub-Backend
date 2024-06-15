import dotenv from 'dotenv';

dotenv.config();

const config = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.PORT || 3000,
  smtp_user: process.env.SMTP_USER,
  smtp_pass: process.env.SMTP_PASS,
};

export default config;
