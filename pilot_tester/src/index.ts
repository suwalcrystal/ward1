// make an express application
import express, { Request, Response, NextFunction, Router } from "express";
import cors from "cors";
// import helmet from 'helmet';
import dotenv from "dotenv";

import routes from "./routes";

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/v1", routes);

// app.use(helmet());

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
