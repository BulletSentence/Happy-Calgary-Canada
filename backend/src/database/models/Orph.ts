import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Orph')
export default class Orph {

    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instrictions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;
}