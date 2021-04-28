import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Products} from "./Products.entity";
import {Movements} from "./Movements.entity";

@Entity()
export class MovementProducts{
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => Products)
    product: Products
    
    @Column({type: "integer"})
    count: number
    
    @ManyToOne(() => Movements)
    movement: Movements
}