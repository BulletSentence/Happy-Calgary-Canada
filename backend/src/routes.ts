import { Router } from 'express';
import OrphController from './controllers/OrphController';

const routes = Router();

routes.post('/orph', OrphController.create);

export default routes; 