import dotenv from 'dotenv';

dotenv.config();

const config = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.PORT || 3000,

  //smtp enviroment
  smtp_host: process.env.SMTP_HOST,
  smtp_pass: process.env.SMTP_PASS,
  smtp_from_address: process.env.SMTP_FROM_ADDRESS,
  smtp_port: process.env.SMTP_PORT
};

export default config;
