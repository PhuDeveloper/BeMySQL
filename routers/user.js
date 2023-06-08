const express = require("express");
const { getUser, getData } = require("../controllers/userControler");
const userController = require("../controllers/userControler");

const router = express.Router();

router.post("/", userController.addUser);
router.get("/", userController.getAll);
// router.get("/data", getData);

module.exports = router;
