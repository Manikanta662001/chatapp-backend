const usermodel = require("../models/usermodel");
const { STATUS_TYPES } = require("../utils/Constants");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  try {
    const { fullname, username, password,confirmpassword, gender } = req.body;
    if (password !== confirmpassword) {
      return res
        .status(STATUS_TYPES.BAD_REQUEST)
        .send({ error: "Passwords are not matching" });
    }
    const alreadyUser = await usermodel.findOne({ username });
    if (alreadyUser) {
      return res
        .status(STATUS_TYPES.BAD_REQUEST)
        .send({ error: "Username already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const dbres = await usermodel.create({
      fullname,
      username,
      password: hashedpassword,
      gender,
      profilepic: gender == "male" ? boyprofilepic : girlprofilepic,
    });
    console.log(dbres, "000000000000000");
    return res
      .status(STATUS_TYPES.CREATED)
      .send({ ...dbres, message: "User is Registered Successfully" });
  } catch (error) {
    return res.status(STATUS_TYPES.BAD_REQUEST).send({ error: error.message });
  }
};
const login = (req, res) => {
  return res.send("Login Route");
};
const logout = (req, res) => {
  return res.send("Logout Route");
};
module.exports = { login, signup, logout };
