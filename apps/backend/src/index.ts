import express from "express";

const app = express();

app.get("./", (req: any, res: any) => {
  res.json({
    message: "hello",
  });
});
