import { Router } from 'express';
import OrphController from './controllers/OrphController';

const routes = Router();

routes.get('/orph', OrphController.index);
routes.get('/orph/:id', OrphController.show);
routes.post('/orph', OrphController.create);

export default routes; 