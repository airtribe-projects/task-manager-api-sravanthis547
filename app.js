require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { logger } = require("./middleare/logger/logger");
const tasksRoute = require("./routes/tasksRouter");

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(tasksRoute);

PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    res.status(500).send("Internal Server error.");
  }
  console.log(`app listening on port ${PORT}`);
});
