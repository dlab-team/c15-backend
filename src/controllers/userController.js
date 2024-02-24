import models from "../models/index.js";
const { User } = models;

// GET = Index usuarios (solo admin)
async function index(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
    // Missing admin authentication
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

// GET {:id} = Ver usuario
async function read(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) { return res.status(404).json({ message: 'User not found' }) }
    res.json(user);
    // Missing authentication
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

// POST = Crear usuario
async function create(req, res) {
  // Validación a nivel de controlador (es necesaria?)
  if(!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name) {
    return res.status(400).json({ message: 'Error 400: Bad Request' });
  }
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

// PUT {:id} = Editar usuario
async function update(req, res) {
  // Validación a nivel de controlador (es necesaria?)
  if(req.body.name == '' || req.body.email == '' || req.body.password == '' || req.body.last_name == '') {
    return res.status(400).json({ message: 'Error 400: Bad Request' });
  }
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) { return res.status(404).json({ message: 'User not found' }) }
    user.update(req.body);
    res.json(user);
    // Missing authentication
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

// DELETE {:id} = Eliminar usuario
async function destroy(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) { return res.status(404).json({ message: 'User not found' }) }
    user.destroy();
    res.json({ message: 'User deleted successfully' });
    // Missing authentication
  } catch (error) {
    res.status(400).json({ message: error.message });
  };
};

export default {
  index,
  create,
  read,
  update,
  destroy
};
