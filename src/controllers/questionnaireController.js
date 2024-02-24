import models from "../models/index.js";
const Pillar = models.Pillar;

async function read(req, res, next) {
    try {
        const questions = await Pillar.findAll({
            attributes: [['id', 'pillar_id'], ['name', 'pillar_name']],
            include: [
                {
                    model: models.Question,
                    attributes: ['id', ['question', 'text']],
                    include: [
                        {
                            model: models.Option,
                            attributes: ['id', ['answer', 'option']]
                        }
                    ]
                }
            ]
        });
        return res.json(questions);
    } catch (error) {
        return next(error);
    }
};

export default { read };