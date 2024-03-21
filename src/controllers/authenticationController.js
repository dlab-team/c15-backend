import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
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
      return res.status(401).json({ message: 'Error 401: Authentication failed' });
    };
    const login = bcrypt.compareSync(req.body.password, user.password);
    if (login) {
      const token = jwt.sign(
        { sub: user.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
      res.status(201).json({
        token
      });
    } else {
      res.status(401).json({ message: 'Error 401: Authentication failed' });
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

async function recovery_email(req, res) {
  if(!req.body.email) {
    return res.status(400).json({ message: 'Error 400: Bad Request' });
  }
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      attributes: ['id', 'email']
    });
    if (user) {
      const recovery_token = jwt.sign(
        { sub: user.id, recovery: true },
        process.env.JWT_SECRET,
        { expiresIn: '3m' }
      );
      res.status(201).json({
        // this should go in an email
        recovery_token
      });
      // res.status(204).end();
    } else {
      res.status(404).json({ message: 'Error 404: User not found' });
    };
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

async function reset_password(req, res) {
  if(!req.body.password) {
    return res.status(400).json({ message: 'Error 400: Bad Request' });
  }
  try {
    const token = req.header("authorization");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.sub, {
      attributes: ['id', 'password', 'password_date']
    });
    if (!user) { return res.status(404).json({ message: 'Error 404: User not found' }) }
    user.update({
      password: bcrypt.hashSync(req.body.password, 12),
      password_date: Date()
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

async function activate_user(req, res) {
  try {
    const token = req.header("authorization");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.sub, {
      attributes: ['id', 'role_id']
    });
    const invalidToken = await InvalidToken.findOne({
      where: { token: token },
      attributes: ['token']
    });
    if (invalidToken) {
      return res.status(409).json({ message: 'Error 409: Conflict' });
    }
    if (!user) { return res.status(404).json({ message: 'Error 404: User not found' }) }
    user.update({
      role_id: 1
    });
    InvalidToken.create({ token: token });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

export default {
  login,
  logout,
  recovery_email,
  reset_password,
  activate_user
};
