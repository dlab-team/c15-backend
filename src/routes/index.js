import routes from './routes.js';
import userRouter from './userRoutes.js';

export default (app) => {
    app.use('/', routes);
    app.use('/users', userRouter);
};
