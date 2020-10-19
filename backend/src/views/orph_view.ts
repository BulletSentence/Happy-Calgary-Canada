import Orph from '../database/models/Orph'
import imagesView from './images_view'

export default {
    render(orph: Orph) {
        return {
        id: orph.id,
        name: orph.name,
        latitude: orph.latitude,
        longitude: orph.longitude,
        about: orph.about,
        instructions: orph.instructions,
        opening_hours: orph.opening_hours,
        open_on_weekends: orph.open_on_weekends,
        images: imagesView.renderMany(orph.images)
        };
    },

    renderMany(orphs: Orph[]){
        return orphs.map(orph => this.render(orph));
    }

}