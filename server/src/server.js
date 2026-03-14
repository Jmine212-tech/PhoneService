import express, { json } from "express";
import dotenv from "dotenv";
import connected_DB from "./config/DB.js";

//Router
import authRoute from "./routers/authRoute.js";

dotenv.config();

const app = express();

app.use(json());

app.use("/api/auth", authRoute);

connected_DB().then(() => {
  const POST = process.env.POST;
  app.listen(POST, () => {
    console.log(`Run Server at POST: ${POST}`);
  });
});
