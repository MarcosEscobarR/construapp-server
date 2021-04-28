import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20})
    name: string

    @Column({length: 50})
    address: string

    @Column()
    latitude: number

    @Column()
    longitude: number

    @Column({type: 'varchar', length: 15})
    phone: string

}
