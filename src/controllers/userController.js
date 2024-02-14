import models from "../models/index.js";
const { User } = models;

class UserController {

    async createUser(dataUser) {
        try {

          const newUser = await User.create(dataUser);
          return newUser;
        } catch (error) {
          console.error('Error al crear un nuevo usuario:', error);
          throw error;
        }
      }

    async getUserById(idUser) {
        try {
          const user = await User.findByPk(idUser,{
            include:{
              model:models.Role,
              as:'role'
            }
          });
          if (!user) {
            throw new Error('Usuario no encontrado por id');
          }
          return user;
        } catch (error) {
          console.error(`Error al obtener usuario por ID (${idUser}):`, error);
          throw error;
        }
      }

    async updateUser(idUser, data) {
        try {
          const user = await User.findByPk(idUser);
          if (!user) {
            throw new Error('Usuario no encontrado para actualizar');
          }
          await user.update(data);
          return user;
        } catch (error) {
          console.error(`Error al actualizar usuario por ID (${idUser}):`, error);
          throw error;
        }
      }

    async deleteUser(idUser) {
        try {
          const user = await User.findByPk(idUser);
    
          if (!user) {
            throw new Error('Usuario no encontrado para eliminar');
          }

          await user.destroy();
    
          return { message: 'Usuario eliminado correctamente' };
        } catch (error) {
          console.error(`Error al eliminar usuario por ID (${idUser}):`, error);
          throw error;
        }
      }
    
    async  getAllUsers(){
        try {
            const users = await User.findAll({
              include:{
                model:models.Role,
                as:'role'
            }});
            return users;
        } catch (error) {
            console.error('Error al obtener información de los usuarios:', error);
            throw error;
        }
    }
}

export default UserController;
