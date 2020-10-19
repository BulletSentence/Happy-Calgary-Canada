import {Request, Response} from 'express'
import { getRepository } from 'typeorm';
import Orph from '../database/models/Orph';
import OrphView from '../views/orph_view';
import * as Yup from 'yup';

export default {

    async index(request: Request, response: Response){
        const orphRepository = getRepository(Orph);
        const orphs = await orphRepository.find({
            relations: ['images']
        });
        return response.json(OrphView.renderMany(orphs)) ;
    },

    async show(request: Request, response: Response){
        const {id} = request.params;
        const orphRepository = getRepository(Orph);
        const orph = await orphRepository.findOneOrFail(id, {
            relations: ['images']
        });
        return response.json(OrphView.render(orph));
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
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        });

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images,
        };
    
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required(),
            }))
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const orph = orphRepository.create(data);
    
        await orphRepository.save(orph);
    
        console.log(request.body);
        return response.status(201).json(orph);
    }
}