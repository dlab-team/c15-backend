/**
 * @swagger
 * tags:
 *   name: Questionnarie
 *   description: Endpoint for getting the questionnarie
 */
/**
 * @swagger
 * /questionnarie:
 *   get:
 *     summary: Get information about pillars with associated questions and options.
 *     tags: [Questionnarie]
 *     description: This endpoint returns information about pillars along with their associated questions and options.
 *     responses:
 *       200:
 *         description: Successful operation. Returns a list of pillars with their questions and options.
 *         content:
 *           application/json:
 *             example:
 *               - pillar_id: 1
 *                 pillar_name: "Pillar 1"
 *                 questions:
 *                   - id: 1
 *                     text: "Question 1?"
 *                     options:
 *                       - id: 1
 *                         option: "Option 1"
 *                       - id: 2
 *                         option: "Option 2"
 *                   - id: 2
 *                     text: "Question 2?"
 *                     options:
 *                       - id: 3
 *                         option: "Option 1"
 *                       - id: 4
 *                         option: "Option 2"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: "Internal Server Error"
 */