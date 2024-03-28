import models from "../models/index.js";
const { User, CompanyType, Company } = models;
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import transporter from '../../mail.js';
import html_template from '../../mail_template.js';
import dotenv from 'dotenv';
dotenv.config();

// GET = Index users
async function index(req, res) {
  try {
    const users = await User.findAll({
      include: [{
        model: Company,
        include: [CompanyType]
      }]
    });
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

// GET {:id} = Read user
async function read(req, res) {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{
        model: Company,
        include: [CompanyType]
      }]
    });
    if (!user) { return res.status(404).json({ message: 'Error 404: User not found' }) }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

// POST = Create user
async function create(req, res) {
  if (!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name) {
    return res.status(400).json({ message: 'Error 400: Bad Request' });
  }
  const t = await models.database.transaction();
  try {
    const newUser = await User.create(req.body, { transaction: t });
    // console.log(models.CompanyType.prototype)
    const newCompany = await newUser.createCompany({
      name: req.body.company_name
    }, { transaction: t });

    if (req.body.company_type_id) {
      const companyType = await CompanyType.findOne({ where: { id: req.body.company_type_id } });
      await newCompany.setCompany_Type(companyType, { transaction: t });
    }

    await t.commit();

    const token = jwt.sign(
      { sub: newUser.id, activation: true },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    const mail = {
      from: process.env.MAIL_USER,
      to: newUser.email,
      subject: 'Bienvenido! Activa tu cuenta',
      text: token,
      html: html_template(token)
    }

    transporter.sendMail(mail, (err, info) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Activation mail sent successfully. ID: %s", info.messageId);
    })

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error)
    await t.rollback();
    res.status(400).json({ message: error.message });
  };
};

// PUT {:id} = Update user
async function update(req, res) {
  if (req.body.first_name == '' || req.body.last_name == '' || req.body.email == '' || 'password' in req.body) {
    return res.status(400).json({ message: 'Error 400: Bad Request' });
  }
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) { return res.status(404).json({ message: 'Error 404: User not found' }) }
    user.update(req.body);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

// DELETE {:id} = Delete user
async function destroy(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) { return res.status(404).json({ message: 'Error 404: User not found' }) }
    user.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

// PUT {:id}/password = Change password
async function change_password(req, res) {
  if (!req.body.new_password || !req.body.old_password || req.body.new_password == req.body.old_password) {
    return res.status(400).json({ message: 'Error 400: Bad Request' });
  }
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'password', 'password_date']
    });
    if (!user) { return res.status(404).json({ message: 'Error 404: User not found' }) }
    if (!bcrypt.compareSync(req.body.old_password, user.password)) {
      return res.status(401).json({ message: 'Error 401: Unauthorized' });
    }
    user.update({
      password: bcrypt.hashSync(req.body.new_password, 12),
      password_date: Date()
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

export default {
  index,
  create,
  read,
  update,
  destroy,
  change_password
};
