import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import { error404, error500 } from "./helpres";
import { router } from "./router";

dotenv.config();

const app: Express = express();

// moduls
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routers
app.use("/api", router);

// Errors
app.use(error404);
app.use(error500);

export { app };
