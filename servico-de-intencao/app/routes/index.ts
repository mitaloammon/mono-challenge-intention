import {Router} from 'express';
import { intentionRoutes } from './intention.routes';

const routes = Router();
routes.get('/intentions', intentionRoutes);

export { routes }