import dotenv from "dotenv";
import express, { Application } from "express";
import morgan from "morgan";
import accountRoutes from "./routes/accountRoute";
import { errorHandler } from "./middlewares/errorHandler";

;

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(errorHandler);

// Routes
app.use("/api/account", accountRoutes);




// Base route
app.get("/", (_req, res) => {
  res.send("Finable API is running...");
});

export default app;
