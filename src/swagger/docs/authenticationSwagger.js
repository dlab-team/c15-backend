/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints for managing authentication
 *//**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Authenticate user and generate JWT token.
 *     tags: [Authentication]
 *     description: This endpoint authenticates the user and returns a JWT token if authentication is successful.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Authentication successful. Returns a JWT token.
 *         content:
 *           application/json:
 *             example:
 *               token: "your_generated_jwt_token"
 *       401:
 *         description: Authentication failed.
 *         content:
 *           application/json:
 *             example:
 *               message: "Authentication failed"
 *       400:
 *         description: Bad request. Invalid input or other errors.
 *         content:
 *           application/json:
 *             example:
 *               message: "Error message"
 */

 /**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Invalidate JWT token and log the user out.
 *     tags: [Authentication]
 *     description: This endpoint invalidates the provided JWT token, logging the user out.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Logout successful. Token invalidated.
 *       400:
 *         description: Bad request. Invalid token or other errors.
 *         content:
 *           application/json:
 *             example:
 *               message: "Error message"
 */