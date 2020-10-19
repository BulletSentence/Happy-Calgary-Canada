import express from 'express';
import { getRepository } from 'typeorm';
import Orph from './database/models/Orph';

import './database/connection';

const app = express();
app.use(express.json());

app.post('/orph', (request, response) => {

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

    orphRepository.save(orph)

    console.log(request.body);
    return response.json({message: "Oie"});
});

app.listen(3333);