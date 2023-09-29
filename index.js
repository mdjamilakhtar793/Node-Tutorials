require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res, next) => {
  res.send("<h1>This is Home section</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Is Working On http://localhost:${port}`);
});
