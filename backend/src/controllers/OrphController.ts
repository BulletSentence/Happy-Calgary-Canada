import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import Orph from '../database/models/Orph';

export default {

    async index(request: Request, response: Response){
        const orphRepository = getRepository(Orph);
        const orphs = await orphRepository.find();
        return response.json(orphs);
    },

    async show(request: Request, response: Response){
        const {id} = request.params;
        const orphRepository = getRepository(Orph);
        const orph = await orphRepository.findOneOrFail(id);
        return response.json(orph);
    },

    async create(request: Request, response: Response) {
        console.log(request.files)
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
    }
}