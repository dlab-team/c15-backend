import userRouter from './userRoutes.js';
import questionRoutes from './questionRoutes.js'
import questionnaireRoutes from './questionnaireRoutes.js';
import blogRoutes from './blogRoutes.js';

export default (app) => {
    app.use('/users', userRouter);
    app.use('/question', questionRoutes)
    app.use('/questionnarie', questionnaireRoutes)
    app.use('/blog', blogRoutes)
};
