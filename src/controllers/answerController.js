import { models } from "../models/index.js";
const Answer = models.Answer;

class AnswerController {

    async createAnswer(dataAnswer) {
        try {

          const newAnswer = await Answer.create(dataAnswer);
          return newAnswer;
        } catch (error) {
          console.error('Error al crear un nueva respuesta:', error);
          throw error;
        }
      }

    async getAnswerById(idAnswer) {
        try {
          const Answer = await Answer.findByPk(idAnswer);
    
          if (!Answer) {
            throw new Error('Respuesta no encontrada por id');
          }
          return Answer;
        } catch (error) {
          console.error(`Error al obtener respuesta con ID (${idAnswer}):`, error);
          throw error;
        }
      }

    async updateAnswer(idAnswer, data) {
        try {
          const Answer = await Answer.findByPk(idAnswer);
          if (!Answer) {
            throw new Error('Respuesta no encontrada para actualizar');
          }
          await Answer.update(data);
          return Answer;
        } catch (error) {
          console.error(`Error al actualizar respuesta con ID (${idAnswer}):`, error);
          throw error;
        }
      }

    async deleteAnswer(idAnswer) {
        try {
          const Answer = await Answer.findByPk(idAnswer);
    
          if (!Answer) {
            throw new Error('Respuesta no encontrada para eliminar');
          }

          await Answer.destroy();
    
          return { message: 'Respuesta eliminada correctamente' };
        } catch (error) {
          console.error(`Error al eliminar la respuesta con ID (${idAnswer}):`, error);
          throw error;
        }
      }
    
    async  getAllAnswer(){
        try {
            const Answers = await Answer.findAll({
                    include:[
                      {
                        model:models.Diagnostic,
                        as:'diagnostic'
                      },
                      {
                        model:models.Option,
                        as:'pilar'
                      }
                    ]
            });
            
            return Answers;
        } catch (error) {
            console.error('Error al obtener las respuestas:', error);
            throw error;
        }
    }
}

export default AnswerController;
