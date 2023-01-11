import express from "express";
import axios from "axios";
import { config } from "../../config";

const { DISCORD_AUTH, CLIENT_ID, CLIENT_SECRET } = config;

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect(
    `${DISCORD_AUTH}?client_id=${CLIENT_ID}&redirect_uri=http%3A%2F%2F26.89.117.213%3A4000%2Flogin%2Fredirect&response_type=code&scope=identify`,
  );
});

router.get("/redirect", async (req, res) => {
  const { code } = req.query;

  const body = new URLSearchParams();
  body.append("client_id", `${CLIENT_ID}`);
  body.append("client_secret", `${CLIENT_SECRET}`);
  body.append("grant_type", "authorization_code");
  body.append("redirect_uri", "http://26.89.117.213:4000/login/redirect");
  body.append("scope", "identify");
  body.append("code", `${code}`);

  const response = await axios.post(
    "https://discordapp.com/api/oauth2/token",
    body,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
  );

  const { access_token, refresh_token, token_type } = await response.data;

  res.redirect(`http://26.89.117.213:3000?code=${access_token}?refresh_token=${refresh_token}?token_type=${token_type}`);
});

export default router;
