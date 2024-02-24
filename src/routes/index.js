import routes from './routes.js';
import userRouter from './userRoutes.js';
import authRouter from './authenticationRoutes.js';

export default (app) => {
    app.use('/', routes);
    app.use('/users', userRouter);
    app.use('/auth', authRouter);
};
