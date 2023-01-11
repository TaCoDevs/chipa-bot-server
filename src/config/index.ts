import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  IP: process.env.IP,
  DISCORD_AUTH: "https://discord.com/api/oauth2/authorize",
  DISCORD_TOKEN: "https://discord.com/api/oauth2/token",
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET
};
