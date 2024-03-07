/**
 * @swagger
 * tags:
 *   - name: Pillar
 *     description: Endpoints for managing pillars
 */

/**
 * @swagger
 * definitions:
 *   Pillar:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *       name:
 *         type: string
 */

/**
 * @swagger
 * /pillars:
 *   post:
 *     summary: Create a new pillar
 *     tags: [Pillar]
 *     description: Create a new pillar with the provided data.
 *     parameters:
 *       - name: name
 *         in: formData
 *         type: string
 *         required: true
 *     responses:
 *       201:
 *         description: Pillar created successfully
 *         schema:
 *           $ref: "#/definitions/Pillar"
 *       400:
 *         description: Bad request. Required data is missing (name).
 */

/**
 * @swagger
 * /pillars:
 *   get:
 *     summary: Get all pillars
 *     tags: [Pillar]
 *     description: Retrieve a list of all pillars.
 *     responses:
 *       200:
 *         description: Successful operation
 *         schema:
 *           type: array
 *           items:
 *             $ref: "#/definitions/Pillar"
 *       400:
 *         description: Bad request. Error message included in the response body.
 */

/**
 * @swagger
 * /pillars/{id}:
 *   get:
 *     summary: Get pillar by ID
 *     tags: [Pillar]
 *     description: Retrieve a pillar by its ID.
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
 *           $ref: "#/definitions/Pillar"
 *       404:
 *         description: Pillar not found
 */

/**
 * @swagger
 * /pillars/{id}:
 *   put:
 *     summary: Update pillar by ID
 *     tags: [Pillar]
 *     description: Update pillar data based on the provided ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         format: int64
 *       - name: name
 *         in: formData
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Pillar updated successfully
 *         schema:
 *           $ref: "#/definitions/Pillar"
 *       400:
 *         description: Bad request. Required data is missing (name).
 *       404:
 *         description: Pillar not found
 */

/**
 * @swagger
 * /pillars/{id}:
 *   delete:
 *     summary: Delete pillar by ID
 *     tags: [Pillar]
 *     description: Delete a pillar based on the provided ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       200:
 *         description: Pillar deleted successfully
 *       404:
 *         description: Pillar not found
 */