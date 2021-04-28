import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Constructions} from "./Constructions.entity";
import {Users} from "./Users.entity";
import {Depositors} from "./Depositors";
import {Responsable} from "./Responsable.entity";
import {MovementProducts} from "./MovementProducts.entity";

@Entity()
export class Movements {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => Constructions)
    construction: Constructions;
    
    @ManyToOne(() => Depositors)
    depositor: Depositors;
    
    @ManyToOne(() => Responsable)
    responsable: Responsable;
    
    @OneToMany(() => MovementProducts, (mp) => mp.movement)
    products: MovementProducts[]
    
}