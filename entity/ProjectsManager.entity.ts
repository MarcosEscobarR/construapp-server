import {Entity} from "typeorm";
import {EmployersEntity} from "../helpers/EmployersEntity";
import {Constructions} from "./Constructions.entity";

@Entity()
export class ProjectsManager extends EmployersEntity {
    constructor(construction: Constructions, userId: number) {
        super();
        this.construction = construction;
        this.userId = userId
    }
}