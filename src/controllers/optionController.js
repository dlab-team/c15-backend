import models  from "../models/index.js";
const {Option} = models;

class OptionController {
  
    async getOptionById(idOption) {
        try {
          const option = await Option.findByPk(idOption);
    
          if (!option) {
            throw new Error('Opción no encontrada por id');
          }
          return option;
        } catch (error) {
          console.error(`Error al obtener opción con ID (${idOption}):`, error);
          throw error;
        }
      }
}

export default OptionController;
