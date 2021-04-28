import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Products} from "./Products.entity";
import {Inventories} from "./Inventories.entity";

@Entity()
export class InventoryProducts {
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => Products)
    product: Products
    
    @ManyToOne(() => Inventories)
    inventory: Inventories
    
    @Column({type: 'integer'})
    count: number
}