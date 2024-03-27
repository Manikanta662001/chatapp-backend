const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MONGODB is connected"))
  .catch((err) =>
    console.log(`Error while connecting to mongodb ${err.message}`)
  );
