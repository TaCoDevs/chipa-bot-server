import express from "express";
import { config } from "./config";

const { PORT } = config;

const app = express();

console.log(PORT);
