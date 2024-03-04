/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: Endpoints for managing blogs
 */
/**
 * @swagger
 * /blog:
 *   post:
 *     summary: Create a new blog
 *     tags: [Blogs]
 *     requestBody:
 *       description: Blog data
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
