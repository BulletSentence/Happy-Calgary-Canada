import routes from './routes'
import express from 'express';
import './database/connection';

const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333);