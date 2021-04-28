import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {UserStatus} from "../helpers/Constrans";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({length: 20})
    firstName: string;

    @Column({length: 20})
    lastName: string;

    @Column({type: "enum", enum: UserStatus})
    status: UserStatus;

    @Column({type: "varchar", length: 15})
    dni: string
    
    @Column()
    isAdmin: boolean

}
