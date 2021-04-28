import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProjectsManager} from "./ProjectsManager.entity";
import {InventoryStatus} from "../helpers/Constrans";
import {InventoryProducts} from "./InventoryProducts.entity";

@Entity()
export class Inventories {
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => ProjectsManager)
    responsable: ProjectsManager
    
    @Column({type: "datetime"})
    created_at: Date
    
    @Column({type: "varchar"})
    observation: string
    
    @Column({type: "enum", enum: InventoryStatus})
    status: InventoryStatus
    
    @OneToMany(() => InventoryProducts, (ip) => ip.inventory)
    products: InventoryProducts[]
}