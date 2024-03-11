/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Endpoints for managing user data
 */

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       first_name:
 *         type: string
 *       last_name:
 *         type: string
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     description: Retrieve a list of all users.
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           type: array
 *           items:
 *             $ref: "#/definitions/User"

 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     description: Create a new user with the provided data.
 *     parameters:
 *       - name: user
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/User"
 *     responses:
 *       201:
 *         description: User created successfully
 *         schema:
 *           $ref: "#/definitions/User"
 *       400:
 *         description: Bad request. Required fields missing.
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [User]
 *     description: Retrieve a user by their ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           $ref: "#/definitions/User"
 *       404:
 *         description: User not found

 *   put:
 *     summary: Update user by ID
 *     tags: [User]
 *     description: Update user data based on the provided ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         format: int64
 *       - name: user
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/User"
 *     responses:
 *       204:
 *         description: User updated successfully
 *       400:
 *         description: Bad request. Required fields missing.
 *       404:
 *         description: User not found

 *   delete:
 *     summary: Delete user by ID
 *     tags: [User]
 *     description: Delete a user based on the provided ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
