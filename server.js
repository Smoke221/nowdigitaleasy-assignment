const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/userRouter");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err.message);
  }
  console.log(`Server is running at port ${process.env.PORT}`);
});
