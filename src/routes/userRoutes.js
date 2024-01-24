import { Router } from 'express';
import UserController from'../controllers/userController.js';

const userRoutes = Router();
const userController = new UserController();

/**Obtiene un usuario en particular */
userRoutes.get('/users/:id', async (req, res) => {
    try {
        const findUser = await userController.getUserById(req.params.id);
        res.json(findUser);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

/**Obtiene todos los usuarios */
userRoutes.get('/users/', async (req, res) => {
    try {
      res.status(200).json({
        message: 'Lista de usuarios: ',
        list: await userController.getAllUsers()
      });
    } catch (error) {
      console.error('Error al generar la lista de usuarios:', error);
      res.status(500).json({
        message: 'Error al generar la lista de usuarios',
        error: error.message
      });
    }
});

/**Guarda un nuevo usuario */
userRoutes.post('/users/save', async (req, res) => {
  try {
    res.status(200).json({
      message: 'Guardando usuario...',
      saved: await userController.createUser(req.body)
    });
  } catch (error) {
    console.error('Error al guardar usuario:', error);
    res.status(500).json({
      message: 'Error al guardar usuario:',
      error: error.message
    });
  }
});

/**Actualiza un usuario */
userRoutes.put('/users/:id', async (req, res) => {
    try {
      const updatedUser = await userController.updateUser(req.params.id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

/**Elimina un usuario */
userRoutes.delete('/users/:id', async (req, res) => {
    try {
      const deletedUser = await userController.deleteUser(req.params.id);
      res.json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


export default userRoutes;