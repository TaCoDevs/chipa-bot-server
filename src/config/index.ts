import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  IP: process.env.IP,
  DBUSER: process.env.DBUSER,
  DBPASSWORD: process.env.DBPASSWORD,
  DBNAME: process.env.DBNAME,
};
