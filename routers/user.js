const express = require("express");
const { getUser } = require("../controllers/userControler");

const router = express.Router();

router.get("/", getUser);
