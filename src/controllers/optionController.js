import models from "../models/index.js";
import utils from "./helper/utils.js";
const { Option, Question } = models;

async function getOptionById(id, res) {
  try {

    if (!utils.isValid(id)) {
      res.status(400).json({ success: false, message: 'Required ID is missing, null or undefined' });
    }
    const option = await Option.findByPk(id);

    if (!option) {
      res.status(404).json({ success: false, message: 'Option not found' });
    }
    else {
      return option;
    }

  } catch (error) {
    return error;
  }
}

async function create(req, res) {
  try {

    const { order, answer, score, question_id } = req.body ?? {};

    if (order != undefined && answer != undefined && score != undefined && question_id != undefined) {

      const questionID = parseInt(req.body.question_id);

      if (!Number.isInteger(questionID)) {
        res.status(400).json({ success: false, message: "The parameter is not a valid id" });
      } else {

        const questionExist = await Question.findByPk(question_id);

        if (questionExist) {
          const newOption = await Option.create({
            order: order,
            answer: answer,
            score: score,
            question_id: question_id
          });

          res.status(200).json({ success: true, message: `Option ${newOption.id} successfully created` });
        } else {
          res.status(404).json({ success: false, message: "Question doesn't exist" });
        }
      }

    } else {
      res.status(400).json({ success: false, message: 'Required data for Option is missing' });
    }

  } catch (error) {
    return error;
  }
}

async function read(req, res) {
  try {

    if (!utils.isValid(req.params.id)) {
      res.status(400).json({ success: false, message: 'Required Id is missing' });
    } else {
      const optionID = parseInt(req.params.id);
      if (!Number.isInteger(optionID)) {
        res.status(400).json({ success: false, message: "The parameter is not a valid id" });
      }
    }
    const option = await Option.findByPk(req.params.id);

    if (!option) {
      res.status(404).json({ success: false, message: 'Option not found' });
    }
    else {
      res.json(option);
    }

  } catch (error) {
    return error;
  }
}

async function update(req, res) {
  try {
    const { id, order, answer, score, question_id } = req.body ?? {};

    if (id === undefined || order === undefined || answer === undefined || score === undefined || question_id === undefined) {
      res.status(400).json({ success: false, message: 'Required data for Option is missing' });
    }
    const optionID = parseInt(req.body.id);

    if (!Number.isInteger(optionID)) {
      res.status(400).json({ success: false, message: "The parameter is not a valid id" });
    }
    const questionID = parseInt(req.body.question_id);

    if (!Number.isInteger(questionID)) {
      res.status(400).json({ success: false, message: "The parameter is not a valid id" });
    }

    const questionExist = await Question.findByPk(question_id);

    const option = await Option.findByPk(optionID);

    if (questionExist) {
      if (option) {
        await option.update(req.body);
        res.status(200).json({ success: true, message: 'Option successfully updated' });

      } else {
        res.status(404).json({ success: false, message: 'Option not found' });
      }
    } else {
      res.status(404).json({ success: false, message: 'Question not found' });
    }

  } catch (error) {
    return error;
  }
}

async function destroy(req, res) {
  try {

    if (!utils.isValid(req.params.id)) {
      res.status(400).json({ success: false, message: 'Required Id is missing' });
    }
    const optionID = parseInt(req.params.id);

    if (!Number.isInteger(optionID)) {
      res.status(400).json({ success: false, message: "The parameter is not a valid id" });
    }
    const option = await Option.findByPk(req.params.id);

    if (option) {
      await option.destroy();
      res.status(200).json({ success: true, message: 'Option successfully deleted' });

    } else {

      res.status(404).json({ success: false, message: 'Option not found' });
    }

  } catch (error) {
    return error;
  }
}

export default {
  getOptionById,
  read, create,
  update, destroy
};
