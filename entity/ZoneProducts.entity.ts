import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Zone} from "./Zones.entity";
import {Products} from "./Products.entity";

@Entity()
export class ZoneProducts {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => Zone)
    zone: Zone
    
    @ManyToOne(() => Products)
    products: Products
    
    @Column({type: "integer"})
    count: number
}