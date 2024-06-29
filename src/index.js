import express from "express";
import cors from "cors";
import env from "dotenv";
import { data } from "./data.js";
env.config();

const app = express();
app.use(
  express.json(),
  cors({
    origin: "",
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);

app.get("/", (req, res) => {
  if (
    req.query.api_key === process.env.API_KEY &&
    req.headers["authorization"] === process.env.AUTHORIZATION_TOKEN
  )
    return res.json({ data }).status(200);
  else return res.json({ message: "Unauthorized" }).status(401);
});

app.listen(process.env.PORT, () => console.log("H"));
