import express from "express";
import cors from "cors";
import env from "dotenv";
env.config();

const data = [];

const app = express();
app.use(
  express.json(),
  cors({
    origin: "",
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);

app.get("/", (req, res) => {
  res.json({ data }).status(200);
});

app.post("/", (req, res) => {
  const dataBody = req.body;
  data.push(dataBody);
  res.json({ dataBody }).status(200);
});

app.listen(process.env.PORT, () => console.log("H"));
