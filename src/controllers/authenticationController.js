import models from "../models/index.js";
const { User } = models;

// login
async function login(req, res) {
  try {
    const compareTo = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (compareTo.authenticate(req.body.password)) {
      res.json({ message: `Auth = ${compareTo.authenticate(req.body.password)}` });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  };
};

export default {
  login
};
