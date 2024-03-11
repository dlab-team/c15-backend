/**
 * @swagger
 * tags:
 *   name: Diagnostic
 *   description: Endpoint for getting a diagnostic
 */
/**
* @swagger
* /diagnostic/process/:id:
*   get:
*     summary: Get the latest diagnostic data for a company.
*     tags: [Diagnostic]
*     description: This endpoint retrieves the latest diagnostic data for a specific company.
*     parameters:
*       - in: path
*         name: idCompany
*         required: true
*         schema:
*           type: string
*         description: The ID of the company for which diagnostic data is requested.
*     responses:
*       200:
*         description: Successful operation. Returns an array of diagnostic metadata.
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/DiagnosticMetaData'
*       500:
*         description: Internal server error.
*         content:
*           application/json:
*             example:
*               message: "Error getting diagnostic data"
*               error: "Internal Server Error"
*/