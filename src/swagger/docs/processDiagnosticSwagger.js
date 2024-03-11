/**
 * @swagger
 * tags:
 *   - name: ProcessDiagnostic
 *     description: Endpoints for processing diagnostic data
 */

/**
 * @swagger
 * /answers/process/:
 *   post:
 *     summary: Process answers for diagnostic
 *     tags: [ProcessDiagnostic]
 *     description: Process user answers to generate diagnostic results.
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_company:
 *               type: integer
 *             answers:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_pillar:
 *                     type: integer
 *                   questions:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id_option:
 *                           type: integer
 *     responses:
 *       200:
 *         description: Answers processed successfully
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *             saved:
 *               type: string
 *       400:
 *         description: Bad request. Required fields missing.
 *       500:
 *         description: Internal server error. Error processing answers.

*/