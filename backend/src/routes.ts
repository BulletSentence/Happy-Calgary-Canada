import { Router } from 'express';
import OrphController from './controllers/OrphController';

const routes = Router();

routes.get('/orph', OrphController.index);
routes.post('/orph', OrphController.create);

export default routes; 