import express, { json } from "express";
import dotenv from "dotenv";
import connected_DB from "./config/DB.js";
import cors from "cors"

//Router
import authRoute from "./routers/authRoute.js";
import repairListRoute from "./routers/repairListRoute.js";

dotenv.config();

const app = express();

app.use(json());
app.use(cors({
  origin: "http://localhost:5173"
}))

app.use("/api/auth", authRoute);
app.use("/api/repairList", repairListRoute)

connected_DB().then(() => {
  const POST = process.env.POST || 3000
  app.listen(POST, () => {
    console.log(`Run Server at POST: ${POST}`);
  });
});
