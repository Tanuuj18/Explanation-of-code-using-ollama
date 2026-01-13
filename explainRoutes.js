import express from "express";
import { explainController } from "./explainController.js";

const router = express.Router();

router.post("/explain", explainController);

export default router;
