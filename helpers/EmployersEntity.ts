import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "../entity/Users.entity";
import {Constructions} from "../entity/Constructions.entity";

export class EmployersEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => Users)
    user: Users;
    
    @Column()
    userId: number
    
    @ManyToOne(() => Constructions)
    construction: Constructions;
    
    @Column()
    constructionId: number
}