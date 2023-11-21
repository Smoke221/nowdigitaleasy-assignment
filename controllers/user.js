const { userModel } = require("../model/user");

async function addUser(req, res) {
  try {
    let { name, email, phoneNumber, role } = req.body;

    const isExisting = await userModel.findOne({ email });

    if (isExisting) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = new userModel({ name, email, phoneNumber, role });
      await newUser.save();

      res.status(201).json({ message: "New user added" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}

async function allUser(req, res) {
  try {
    const user = await userModel.find();

    res.status(200).send({
      msg: "All user details.",
      allUsersDetails: user,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}

async function fetchUser(req, res) {
  try {
    const userId = req.params.userId;

    const user = await userModel.findOne({ _id: userId });

    if (user !== null) {
      res.status(200).send({
        msg: "User details fetched.",
        userDetails: user,
      });
    } else {
      res.status(400).send({ msg: "No user found with provided id" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.params.userId;

    const deleteUser = await userModel.findByIdAndDelete({ _id: userId });

    if (deleteUser) {
      res.status(200).send({ msg: "User deleted successfully." });
    } else {
      res.status(400).send({ msg: "No user found." });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}

async function updateUser(req, res) {
  try {
    const payload = req.body;
    const userId = req.params.userId;

    const updateUser = await userModel.findByIdAndUpdate(
      { _id: userId },
      payload
    );

    if (updateUser) {
      res.status(201).send({ msg: "User details updated successfully." });
    } else {
      res.status(400).send({ msg: "User not found." });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}

module.exports = { addUser, allUser, fetchUser, deleteUser, updateUser };
