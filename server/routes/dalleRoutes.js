import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";
import { dalleController } from "../controllers/dalleController.js";

dotenv.config();
const router = express.Router();


router.route("/").post(dalleController.generate);
export default router;
