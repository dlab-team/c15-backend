/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Endpoints for managing questions
 */

/**
 * @swagger
 * definitions:
 *   Question:
 *     type: object
 *     properties:
 *       question:
 *         type: string
 *         description: The text of the question
 *       id_pillar:
 *         type: integer
 *         description: The ID of the associated pillar
 */

/**
 * @swagger
 * /question:
 *   post:
 *     summary: Create a new question
 *     tags: [Questions]
 *     requestBody:
 *       description: Question data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Question'
 *           example: { question: 'What is your favorite animal?', id_pillar: 1 }
 *     responses:
 *       201:
 *         description: New question created
 *         content:
 *           application/json:
 *             example: { message: 'Question successfully created' }
 *       400:
 *         description: Bad Request - Required data is missing
 *         content:
 *           application/json:
 *             example: { success: false, message: 'Required data is missing (question, id_pillar)' }
 */

/**
 * @swagger
 * /question/{id}:
 *   get:
 *     summary: Get a specific question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the question
 *         content:
 *           application/json:
 *              example: { question: 'What is your favorite animal?', id_pillar: 1 }
 *       404:
 *         description: Question not found
 *         content:
 *           application/json:
 *             example: { success: false, message: 'Question not found' }
 */

/**
 * @swagger
 * /question/{id}:
 *   put:
 *     summary: Update a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Updated question data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Question'
 *           example: { question: 'What is your updated favorite animal?', id_pillar: 1 }
 *     responses:
 *       200:
 *         description: Question updated successfully
 *         content:
 *           application/json:
 *             $ref: '#/definitions/Question'
 *       400:
 *         description: Bad Request - Required data is missing
 *         content:
 *           application/json:
 *             example: { message: 'Error 400: Bad Request' }
 *       404:
 *         description: Question or pillar not found
 *         content:
 *           application/json:
 *             example: { success: false, message: 'Question or pillar not found' }
 */

/**
 * @swagger
 * /question/{id}:
 *   delete:
 *     summary: Delete a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Question deleted successfully
 *         content:
 *           application/json:
 *             example: { message: 'Question successfully deleted' }
 *       404:
 *         description: Question not found
 *         content:
 *           application/json:
 *             example: { success: false, message: 'Question not found' }
 */