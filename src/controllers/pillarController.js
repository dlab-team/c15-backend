import  models from '../models/index.js'
const pillarModel = models.Pillar

async function create(req, res, next) {
    try {
        const { name } = req.body;
        if (name) {
           const newPillar = await pillarModel.create({ name: name });
        res.status(201).json({  message: `Pillar ${newPillar.id} successfully created`  });
        } else {
          return res.status(400).json({ success: false, message: "Required data is missing (name)" });
       }
    } catch (error) {
        return next(error);
    }
}

async function readAll(req, res) {
    try {
      const pillars = await pillarModel.findAll();
      res.json(pillars);
    } catch (error) {
      res.status(400).json({ message: error.message });
    };
  };

  async function read(req, res, next){
    try {
        const pillar = await pillarModel.findByPk(req.params.id);
        if(pillar){ 
           return res.json(pillar);
        } else {
            return res.status(404).json({ success: false, message: "Pillar not found" });
        }
    } catch (error) {
        return next(error);
    }
}

async function update(req, res, next) {
    try {
        if(!req.body || !req.body.name || req.body.name === '') return res.status(400).json({ success: false, message: "Required data is missing (name)" });
        const pillar = await pillarModel.findByPk(req.params.id)
        if(pillar){ 
           pillarModel.update(
                req.body,
                { where: { id: pillar.id } }
              )
              res.status(200).json({  message: `Pillar ${pillar.id} successfully updated`  });
         } else {
             return res.status(404).json({ success: false, message: "Pillar not found" });
         }
    } catch (error) {
        return next(error)
        
    }
}

async function destroy(req, res, next){
    try {
        const pillar = await pillarModel.findByPk(req.params.id);
        if(pillar){ 
           pillar.destroy()
            return  res.status(200).json({  message: `Pillar successfully deleted`  });
         } else {
             return res.status(404).json({ success: false, message: "Pillar not found" });
         }
    } catch (error) {
        return next(error)
    }
}


export default {
    create,
    readAll,
    read,
    update,
    destroy
}