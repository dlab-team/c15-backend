import  models from '../models/index.js'
const questionModel = models.Question
const pillarModel = models.Pillar

 async function create(req, res, next) {
    try {
        const { question, id_pillar } = req.body;
        if (question && id_pillar) {
           const newQuestion = await questionModel.create({
            question: question, id_pillar: id_pillar
        });
        res.status(201).json({  message: `Question ${newQuestion.id} successfully created`  });
        } else {
          return res.status(400).json({ success: false, message: "Required data is missing (question, id_pillar)" });
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
        if(req.body.question == '' || req.body.id_pillar == '') return res.status(400).json({ message: 'Error 400: Bad Request' });
        const question = await questionModel.findByPk(req.params.id);
        const pillar = await pillarModel.findByPk(req.body.id_pillar)
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