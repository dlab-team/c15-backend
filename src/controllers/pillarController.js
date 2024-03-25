import  models from '../models/index.js'
const { Pillar: pillarModel, PillarMessage } = models;

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

async function index_messages(req, res) {
    try {
        console.log(pillarModel)
        const pillar = await pillarModel.findByPk(req.params.id);
        const messages = await pillar.getPillar_messages()
        res.json(messages);
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};

async function create_message(req, res) {
    try {
        if (!req.body.message || !req.body.score_limit) {
            return res.status(400).json({ message: 'Error 400: Bad Request' });
        }
        const pillar = await pillarModel.findByPk(req.params.id);
        const new_message = await pillar.createPillar_message(req.body)
        res.json(new_message);
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};

async function update_message(req, res) {
    try {
        if (req.body.message == '') {
            return res.status(400).json({ message: 'Error 400: Bad Request' });
        }
        const message = await PillarMessage.findByPk(req.params.msg_id);
        if (!message) { return res.status(404).json({ message: 'Error 404: Message not found' }) }
        if (message.pillar_id == req.params.id) {
            message.update(req.body);
            res.status(204).end();
        } else {
            res.status(400).json({ message: 'Error 400: Bad Request' });
        };
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};

async function destroy_message(req, res) {
    try {
        const message = await PillarMessage.findByPk(req.params.msg_id);
        if (!message) { return res.status(404).json({ message: 'Error 404: Message not found' }) }
        if (message.pillar_id == req.params.id) {
            message.destroy();
            res.status(204).end();
        } else {
            res.status(400).json({ message: 'Error 400: Bad Request' });
        };
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};

export default {
    create,
    readAll,
    read,
    update,
    destroy,
    index_messages,
    create_message,
    update_message,
    destroy_message
}
