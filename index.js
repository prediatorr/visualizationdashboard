const express = require("express");
require("dotenv").config();
const app = express();
const ENDPOINT = require("./backend/endpoints");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});


mongoose
  .connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.4wnjk23.mongodb.net/?retryWrites=true&w=majority`,
    {
      dbName: process.env.DBNAME,
    }
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("server is working");
      console.log(process.env.DBNAME);
    });
  })
  .catch((err) => {
    console.log(err);
  });
