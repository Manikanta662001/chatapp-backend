const express = require("express");
require("dotenv").config();
require("./db/dbConnection");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running under ${PORT}`);
});
