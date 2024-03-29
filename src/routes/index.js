import userRouter from './userRoutes.js';
import authRouter from './authenticationRoutes.js';
import questionRoutes from './questionRoutes.js'
import questionnaireRoutes from './questionnaireRoutes.js';
import blogRoutes from './blogRoutes.js';
import diagnosticRoutes from './diagnosticRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocumentation from '../swagger/index.js';
import pillarRoutes from './pillarRoutes.js'
import optionRoutes from "./optionRoutes.js";

export default (app) => {
    app.use('/users', userRouter);
    app.use('/auth', authRouter);
    app.use('/question', questionRoutes)
    app.use('/questionnarie', questionnaireRoutes)
    app.use('/blog', blogRoutes)
    app.use('/diagnostic', diagnosticRoutes)
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));
    app.use('/pillar', pillarRoutes)
    app.use('/option', optionRoutes);
};
