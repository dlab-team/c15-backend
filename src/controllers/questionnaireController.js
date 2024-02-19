import models from "../models/index.js";
const Pillar = models.Pillar;

class QuestionnaireController {

    async getAllQuestion() {
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
            return questions;
        } catch (error) {
            console.error('Error al obtener las preguntas:', error);
            throw error;
        }
    }
}

export default QuestionnaireController;