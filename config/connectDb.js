require("dotenv").config();
const mongoose = require("mongoose");

const connect = mongoose.connect(process.env.MONGOOSE_CONNECT, () => {
  console.log("Mongoose connected!!");
});

module.exports = connect;
