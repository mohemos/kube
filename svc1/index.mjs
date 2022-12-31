import express from "express";
import os from "os";
import got from "got";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(
    `Hello from ${os.hostname()} running on service one! with svc2: ${
      process.env.SVC2_URL
    }`
  );
});

app.get("/svc2", async (req, res) => {
  const response = await got(process.env.SVC2_URL);
  res.send(response.body);
});

app.listen(port, () => {
  console.log(`Service one app listening at http://localhost:${port}`);
});
