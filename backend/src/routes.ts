
import { Router } from 'express'
import { getRepository } from 'typeorm';
import Orph from './database/models/Orph';

const routes = Router();

routes.post('/orph', async (request, response) => {

    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = request.body;

    const orphRepository = getRepository(Orph);
    const orph = orphRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    });

    await orphRepository.save(orph);

    console.log(request.body);
    return response.status(201).json(orph);
});

export default routes;