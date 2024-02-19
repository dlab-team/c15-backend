import Question from './../models/question.js'
export const create = async (questionText, pillarId) => {
    console.log(Question);
    try {
       const newQuestion = await Question.create({
        question: questionText, fk_id_pillar: pillarId
    });
       res.status(201).json({
        message: `Question ${newQuestion.id} successfully created`  
    });
    } catch (error) {
        throw new Error(error);
    }
}