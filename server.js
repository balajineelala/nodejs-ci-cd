const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Nodejs API");
});

app.listen(port, () => {
  console.log(`Server is Running on at ${port}`);
});
