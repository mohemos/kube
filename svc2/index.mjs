import express from "express";
import os from "os";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Hello from ${os.hostname()} running on service two!`);
});

app.get("/v1/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Service one app listening at http://localhost:${port}`);
});
