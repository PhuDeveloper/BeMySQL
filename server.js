require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const userRouter = require("./routers/user");
const { MongoClient, ServerApiVersion } = require("mongodb");
app.use(bodyParser.json()); // Xử lý dữ liệu JSON
app.use(bodyParser.urlencoded({ extended: false })); // Xử lý dữ liệu từ form
app.use(cors());
app.use(morgan("common"));

const port = 3000;
const uri =
  "mongodb+srv://phumagic2011:hr0TNzao5OdWEE5u@cluster0.shztoyw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use("/user", userRouter);
app.listen(port, () => {
  console.log(`Example app listening on port 3000`);
});
