import  models from '../models/index.js'
const questionModel = models.Question

 async function create(req, res, next) {
    try {
        const { question, pillarId } = req.body;
        if (question && pillarId) {
           const newQuestion = await questionModel.create({
            question: question, fk_id_pillar: pillarId
        });
        res.status(201).json({  message: `Question ${newQuestion.id} successfully created`  });
        } else {
          return res.status(400).json({ success: false, message: "Required data is missing (question, pillarId)" });
       }
    } catch (error) {
        return next(error);
    }
}

export default {create}