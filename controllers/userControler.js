const User = require("../model/userModel");

const userController = {
  addUser: async (req, res) => {
    try {
      const { name, address } = req.body;
      const newUser = new User({ name, address });
      console.log("newUser", newUser);
      await newUser.save();
      res.status(200).json(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json("err");
    }
  },
};
module.exports = userController;
