import  models from '../models/index.js'
const question = models.Question
export const createQuestion = async (questionText, pillarId) => {
    try {
       const newQuestion = await question.create({
        question: questionText, fk_id_pillar: pillarId
    });
      return newQuestion
    } catch (error) {
        throw new Error(error);
    }
}