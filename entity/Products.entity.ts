import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Constructions} from "./Constructions.entity";
import {UnidadDeMedida} from "../helpers/Constrans";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "varchar", length: 20})
    Name: string
    
    @Column({type: "integer"})
    count: number
    
    @Column({type: "enum",enum: UnidadDeMedida})
    unidad_de_media: UnidadDeMedida;
    
    @ManyToOne(() => Constructions)
    construction: Constructions
}