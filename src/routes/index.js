import routes from './routes.js';
import userRouter from './userRoutes.js';
import questionRoutes from './questionRoutes.js'

export default (app) => {
    app.use('/', routes);
    app.use('/users', userRouter);
    app.use('/question', questionRoutes)
};
