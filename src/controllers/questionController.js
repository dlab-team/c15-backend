import  models from '../models/index.js'
const questionModel = models.Question

 async function create(req, res, next) {
    try {
        const { question, id_pillar } = req.body;
        if (question && id_pillar) {
           const newQuestion = await questionModel.create({
            question: question, fk_id_pillar: id_pillar
        });
        res.status(201).json({  message: `Question ${newQuestion.id} successfully created`  });
        } else {
          return res.status(404).json({ success: false, message: "Required data is missing (question, id_pillar)" });
       }
    } catch (error) {
        return next(error);
    }
}

async function read(req, res, next){
    try {
        const question = await questionModel.findByPk(req.params.id);
        if(question){ 
           return res.json(question);
        } else {
            return res.status(404).json({ success: false, message: "Question not found" });
        }
    } catch (error) {
        return next(error);
    }
}

async function update(req, res, next) {
    try {
        if(!req.body.question || !req.body.id_pillar) return res.status(400).json({ message: 'Error 400: Bad Request' });
   
        const question = await questionModel.findByPk(req.params.id);
        if(question){ 
            questionModel.update(question)
            return res.json(question);
         } else {
             return res.status(404).json({ success: false, message: "Question not found" });
         }
    } catch (error) {
        return next(error)
        
    }
}

async function destroy(req, res, next){
    try {
        const question = await questionModel.findByPk(req.params.id);
        if(question){ 
            questionModel.destroy(question)
            return  res.status(200).json({  message: `Question successfully deleted`  });
         } else {
             return res.status(404).json({ success: false, message: "Question not found" });
         }
    } catch (error) {
        return next(error)
    }
}

export default {
    create,
    read,
    update,
    destroy
}