import { Router, Application } from 'express';
import * as UserController from './controllers/user';
import * as ProcessController from './controllers/process';

export default (app: Application) => {
    const APIRouter = Router();
    APIRouter.get('/signin', UserController.signIn)
    APIRouter.get('/start', ProcessController.start);

    app.use('/api', APIRouter);
};