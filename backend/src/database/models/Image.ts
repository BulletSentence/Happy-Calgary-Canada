import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orph from './Orph';

@Entity('images')
export default class Image {

    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    path: string;

    @ManyToOne(() => Orph, orph => orph.images)
    @JoinColumn({name: 'orph_id'})
    orph: Orph;
}