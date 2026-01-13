import express from "express";
import cors from "cors";
import explainRoutes from "./explainRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", explainRoutes);

export default app;
