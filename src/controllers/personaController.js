import {Persona} from '../models/persona.js';
import {Empresa} from '../models/empresa.js';


class PersonaController {

    async createPersona(datosPersona) {
        try {

          const nuevaPersona = await Persona.create(datosPersona);
    
          return nuevaPersona.toJSON();
        } catch (error) {
          console.error('Error al crear una nueva persona:', error);
          throw error;
        }
      }

    async getPersonarById(idPersona) {
        try {
          const persona = await Persona.findByPk(idPersona, {
            include: [{
              model: Empresa,
              attributes: ['id_empresa', 'nombre_empresa']
            }]
          });
    
          if (!persona) {
            throw new Error('Persona no encontrada');
          }
    
          return persona.map(persona => {
            const personaData = persona.toJSON();
            
            if (personaData.Empresa) {//verifica si la persona está asociada a una empresa.
            personaData.Empresa = personaData.Empresa.toJSON();
            }
            return personaData;
        });
        } catch (error) {
          console.error(`Error al obtener persona por ID (${idPersona}):`, error);
          throw error;
        }
      }

    async updatePersona(idPersona, datos) {
        try {
          const persona = await Persona.findByPk(idPersona);
    
          if (!persona) {
            throw new Error('Persona no encontrada');
          }

          await persona.update(datos);
    
          return persona.toJSON();
        } catch (error) {
          console.error(`Error al actualizar persona por ID (${idPersona}):`, error);
          throw error;
        }
      }

    async deletePersona(idPersona) {
        try {
          const persona = await Persona.findByPk(idPersona);
    
          if (!persona) {
            throw new Error('Persona no encontrada');
          }

          await persona.destroy();
    
          return { message: 'Persona eliminada correctamente' };
        } catch (error) {
          console.error(`Error al eliminar persona por ID (${idPersona}):`, error);
          throw error;
        }
      }
    
    async  finAllPersona(){
        try {
            const personas = await Persona.findAll({
            include: [{
                model: Empresa,
                attributes: ['id_empresa', 'nombre_empresa']
            }]
            });
            return personas.map(persona => {
                const personaData = persona.toJSON();
                
                if (personaData.Empresa) {
                personaData.Empresa = personaData.Empresa.toJSON();
                }
                return personaData;
            });
        } catch (error) {
            console.error('Error al obtener información de personas:', error);
            throw error;
        }
    }
}

export default PersonaController;