import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./Users.entity";
import {ConstructionStatus, MovementTypes} from "../helpers/Constrans";
import {Company} from "./Companies.entity";
import {Zone} from "./Zones.entity";
import {Products} from "./Products.entity";

@Entity()
export class Constructions {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    name: string

    @Column({type: "enum", enum: ConstructionStatus})
    status: ConstructionStatus

    @ManyToOne(() => Company)
    company: Company;
    
    @Column({type: 'datetime', nullable: true})
    Created_At: Date;
    
    @Column({type: 'enum', enum: MovementTypes})
    type: MovementTypes;
    
    @OneToMany( () => Products, (p) => p.construction )
    products: Products[]
    
    
}