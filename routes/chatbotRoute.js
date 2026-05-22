import express from "express";
import { chatbotResponse } from "../controllers/chatbotController.js";

const chatbotRouter = express.Router();

chatbotRouter.post("/", chatbotResponse);

export default chatbotRouter;
