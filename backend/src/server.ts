import express from 'express';
import { getRepository } from 'typeorm';
import Orph from './database/models/Orph';

import './database/connection';

const app = express();
app.use(express.json());

app.post('/orph', async (request, response) => {

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
    return response.json({message: "Salvo"});
});

app.listen(3333);