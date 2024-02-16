import models from "../models/index.js";
import QuestionController from "./questionController.js";
import OptionController from "./optionController.js";
import DiagnosticController from "./diagnosticController.js";

const diagnosticController = new DiagnosticController();
const questionController = new QuestionController();
const optionController = new OptionController();

class ProcessDiagnosticController {

    async processAnswerDiasgnostic(req) {
        try {
            const requestBody = req.body.answers;
            // an id_question is needed to know which pillar it corresponds to
            const idQuestion = requestBody[0].id_question;
            const idCompany = req.body.id_company;

            //The record of the question is obtained
            const pillarQuestion = await questionController.getQuestionById(idQuestion);

            let sumScore = 0.0;
            let scorePercentage = 0.0;

            for (const element of req.body.answers) {
                try {
                    //The score of each option is obtained and they are added
                    const option = await optionController.getOptionById(element.id_option);
                    sumScore += option.score;
                } catch (error) {
                    console.error(`Error querying database for ID option ${element.id_option}:`, error);
                }
            }

            if (sumScore > 0) {
                //The calculation equivalent to the percentage that corresponds to the catch is carried out..
                scorePercentage =((sumScore * 100) / 30).toFixed(1);
            }

            const diagnostic = await models.Diagnostic.create({
                createAt: new Date(),
                updateAt: new Date(),
                id_company: idCompany
            });

            const answersData = requestBody.map(element => ({
                id_diagnostic: diagnostic.id,
                id_option: element.id_option
            }));

            await models.Answer.bulkCreate(answersData);

            await models.PillarDiagnostic.create({
                score: scorePercentage,
                id_pillar: pillarQuestion.id_pillar,
                id_diagnostic: diagnostic.id
            });


            return 'The diagnosis has been processed successfully';

        } catch (error) {
            console.error('Error processing the diagnosis: ', error);
            throw error;
        }
    }

    async processDiagnostic(idCompany) {
        try {
            const diagnosticData = await diagnosticController.getAllDiagnosticByCompany(idCompany);

            let prevMessage = null;
            let diagnosticResult = [];

            ////Determines the message to display based on the position of the score between the score_limit values
            for (const metaData of diagnosticData) {
                let messageToDisplay = "";
                for (const message of metaData.description) {

                    const maxScoreLimit = metaData.description[metaData.description.length - 1].score_limit;
                    const scoreQuestion = ((metaData.value * maxScoreLimit) / 100).toFixed(1);

                    if (prevMessage !== null) {
                        if (prevMessage.score_limit < scoreQuestion&& message.score_limit > scoreQuestion) {
                            messageToDisplay = message.message;
                            prevMessage = null;
                            break;
                        }
                    }
                    prevMessage = message;
                }
                diagnosticResult.push({
                    ...metaData,
                    description: messageToDisplay
                });
            }

            return diagnosticResult;

        } catch (error) {
            console.error('Error processing diagnosis: ', error);
            throw error;
        }
    }
}

export default ProcessDiagnosticController;
