import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Constructions} from "./Constructions.entity";
import {ZoneProducts} from "./ZoneProducts.entity";

@Entity()
export class Zone {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @ManyToOne(() => Constructions)
    construction: Constructions
    
    @OneToMany(() => ZoneProducts, (z) => z.zone)
    products: ZoneProducts[]
    
}