import express from "express";
import cors from "cors";
import routes from "./api/routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const corsOptions = {
  origin: ["https://uplife.heppoko.space", "https://beautiful-treacle-c8e330.netlify.app/", "http://localhost:5173"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/uplife", routes);
app.use("*", (req, res) => res.status(404).json({ error: "not found" })); // if invalid location, not found.

export default app;
