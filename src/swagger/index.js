import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'VisorPyme',
      description: 'Documentación del Backend de la aplicación VisorPyme',
      version: '1.0',
    },
  },
  apis: ['./src/swagger/docs/*.js'],
};

const swaggerDocumentation = swaggerJSDoc(swaggerOptions);

export default swaggerDocumentation;