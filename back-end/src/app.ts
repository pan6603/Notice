import express from "express";
import cors from "cors";
import boardRoutes from "../src/routers/board";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/boards", boardRoutes);

export default app;
