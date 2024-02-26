import jwt from "jsonwebtoken";
import models from "../models/index.js";
const { User, InvalidToken } = models;
import dotenv from 'dotenv';
dotenv.config();

async function login(req, res) {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      attributes: ['id', 'email', 'password']
    });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    };
    if (user.authenticate(req.body.password)) {
      const token = jwt.sign(
        { sub: user.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
      res.status(201).json({
        token
      });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    };
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

async function logout(req, res) {
  try {
    const token = req.header('authorization');
    jwt.verify(token, process.env.JWT_SECRET);
    InvalidToken.create({ token: token });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

export default {
  login,
  logout
};
