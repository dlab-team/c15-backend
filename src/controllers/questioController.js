import { models } from "../models/index.js";
const Question = models.Question;

class QuestionController {

    async createQuestion(dataQuestion) {
        try {

          const newQuestion = await Question.create(dataQuestion);
          return newQuestion;
        } catch (error) {
          console.error('Error al crear un nueva pregunta:', error);
          throw error;
        }
      }

    async getQuestionById(idQuestion) {
        try {
          const question = await Question.findByPk(idQuestion);
    
          if (!question) {
            throw new Error('Pregunta no encontrada por id');
          }
          return question;
        } catch (error) {
          console.error(`Error al obtener pregunta con ID (${idQuestion}):`, error);
          throw error;
        }
      }

    async updateQuestion(idQuestion, data) {
        try {
          const question = await Question.findByPk(idQuestion);
          if (!question) {
            throw new Error('Pregunta no encontrada para actualizar');
          }
          await question.update(data);
          return question;
        } catch (error) {
          console.error(`Error al actualizar pregunta con ID (${idQuestion}):`, error);
          throw error;
        }
      }

    async deleteQuestion(idQuestion) {
        try {
          const question = await Question.findByPk(idQuestion);
    
          if (!question) {
            throw new Error('Pregunta no encontrada para eliminar');
          }

          await question.destroy();
    
          return { message: 'Pregunta eliminada correctamente' };
        } catch (error) {
          console.error(`Error al eliminar la pregunta con ID (${idQuestion}):`, error);
          throw error;
        }
      }
    
    async  getAllQuestion(){
        try {
            const questions = await Question.findAll({
                    include:[
                      {
                        model:models.Option,
                        as:'options'
                      },
                      {
                        model:models.Pillar,
                        as:'pillar'
                      }
                    ]
            });
            
            return questions;
        } catch (error) {
            console.error('Error al obtener las preguntas:', error);
            throw error;
        }
    }
}

export default QuestionController;
