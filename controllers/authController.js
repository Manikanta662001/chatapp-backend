const signup = (req, res) => {
  return res.send("Sighnup Route");
};
const login = (req, res) => {
  return res.send("Login Route");
};
const logout = (req, res) => {
  return res.send("Logout Route");
};
module.exports = { login, signup, logout };
