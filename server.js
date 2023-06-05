require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const app = express();

const port = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const con = mysql.createConnection({
  host: process.env.HOST_NAME ?? "localhost",
  user: "root2",
  password: "123456",
  database: "test",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!!!");
});

app.get("/data", function (req, res) {
  const sql = "SELECT * FROM user";

  con.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results.id);
    console.log("resull", results[0].id);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
