import { Router } from 'express';
import multer from 'multer';
import OrphController from './controllers/OrphController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orph', OrphController.index);
routes.get('/orph/:id', OrphController.show);
routes.post('/orph', upload.array('images'),OrphController.create);

export default routes; 