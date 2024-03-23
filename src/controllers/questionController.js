import  models from '../models/index.js'
const questionModel = models.Question
const pillarModel = models.Pillar

 async function create(req, res, next) {
    try {
        const { question, pillar_id } = req.body;
        if (question && pillar_id) {
           const newQuestion = await questionModel.create({
            question: question, pillar_id: pillar_id
        });
        res.status(201).json({  
            id:newQuestion.id,
            message: `Question ${newQuestion.id} successfully created`});
        } else {
          return res.status(400).json({ success: false, message: "Required data is missing (question, pillar_id)" });
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
        if(req.body.question == '' || req.body.pillar_id == '') return res.status(400).json({ message: 'Error 400: Bad Request' });
        const question = await questionModel.findByPk(req.params.id);
        const pillar = await pillarModel.findByPk(req.body.pillar_id)
        if(question && pillar){ 
            questionModel.update(
                req.body,
                { where: { id: question.id } }
              )
            return res.json(req.body);
         } else {
             return res.status(404).json({ success: false, message: "Question or pillar not found" });
         }
    } catch (error) {
        return next(error)
        
    }
}

async function destroy(req, res, next){
    try {
        const question = await questionModel.findByPk(req.params.id);
        if(question){ 
            question.destroy()
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