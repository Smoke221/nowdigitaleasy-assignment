const express = require("express");
const {
  addUser,
  allUser,
  fetchUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/add", addUser);
userRouter.get("/all", allUser);
userRouter.get("/fetch/:userId", fetchUser);
userRouter.delete("/delete/:userId", deleteUser);
userRouter.patch("/update/:userId", updateUser);

module.exports = { userRouter };
