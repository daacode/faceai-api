const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("this is working");
});

app.post("/signin", (req, res) => {
  res.json("signing");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
