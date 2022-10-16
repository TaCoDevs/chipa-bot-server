import express from "express";
import cors from "cors";
import { config } from "./config";
import API from "./routes";

const { IP, PORT } = config;
const app = express();

app.use(cors(), express.json());

API(app);

app.listen(PORT, () => console.log(`[SERVER] is listening on http://${IP}:${PORT}`));
