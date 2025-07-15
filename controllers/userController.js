const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { username, email } = req.body;
  const user = await User.create({ username, email });
  res.json(user);
};
