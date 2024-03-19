const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    return res.send("Hello world")
})

app.listen(PORT, () => {
  console.log(`Server is running under ${PORT}`);
});
