import models from "../models/index.js";
import OptionController from "./optionController.js";
import DiagnosticController from "./diagnosticController.js";

const diagnosticController = new DiagnosticController();
const optionController = new OptionController();

class ProcessDiagnosticController {

    async processAnswerDiasgnostic(req) {
        try {
            const idCompany = req.body.id_company;
            const requestBody = req.body.answers;
            let sumScore = 0.0;
            let scorePercentage = 0.0;
            let diagnosis = null;

            for (const metaQuestion of requestBody) {
                const pillarQuestion = metaQuestion.id_pillar;
                for (const answer of metaQuestion.questions) {
                    try {
                        //The score of each option is obtained and they are added
                        const option = await optionController.getOptionById(answer.id_option);
                        sumScore += option.score;
                    } catch (error) {
                        console.error(`Error querying database for ID option ${answer.id_option}:`, error);
                    }
                }
                if (sumScore > 0) {
                    //The calculation equivalent to the percentage that corresponds to the catch is carried out..
                    scorePercentage = ((sumScore * 100) / 30).toFixed(1);
                }                
                sumScore = 0.0;

                try {

                    diagnosis = await models.Diagnostic.create({
                        createAt: new Date(),
                        updateAt: new Date(),
                        id_company: idCompany
                    });

                } catch (error) {
                    console.error(`Error saving diagnosis:`, error);
                }
                try {
                    const answersData = metaQuestion.questions.map(element => ({
                        id_diagnostic: diagnosis.id,
                        id_option: element.id_option
                    }));
            

                    await models.Answer.bulkCreate(answersData);
                } catch (error) {
                    console.error(`Error saving answer:`, error);
                }

                try {
                    await models.PillarDiagnostic.create({
                        score: scorePercentage,
                        id_pillar: pillarQuestion,
                        id_diagnostic: diagnosis.id
                    });
                } catch (error) {
                    console.error(`Error saving Pillar Diagnostic:`, error);
                }
            }

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
                        if (prevMessage.score_limit < scoreQuestion && message.score_limit > scoreQuestion) {
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
