import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Constructions} from "./Constructions.entity";

@Entity()
export class Responsable {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "varchar", length: 40})
    name: string
    
    @Column({type: "varchar", length: 15})
    dni: string
    
    @ManyToOne(() => Constructions)
    construcrion: Constructions
}