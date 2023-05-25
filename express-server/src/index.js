const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./resources/members");

app.use(express.json());

app.use("/members", userRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
