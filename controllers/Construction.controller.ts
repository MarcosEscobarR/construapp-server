import {Request, Response} from "express";
import {CreateConstructionModel} from "../models/Construction/CreateConstructionModel";
import {getConnection} from "typeorm";
import {Constructions} from "../entity/Constructions.entity";
import {ConstructionStatus} from "../helpers/Constrans";
import {EmployerModel} from "../models/User/EmployerModel";
import {ProjectsManager} from "../entity/ProjectsManager.entity";
import {ShopsManager} from "../entity/ShopsManager.entity";
import {Depositors} from "../entity/Depositors";

export const Create = async (req: Request, res: Response) => {
    let construction: CreateConstructionModel = {
        created_at: Date.now(),
        status: ConstructionStatus.Activo,
        companyId: 1, ...req.body
    };
    
    try {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into<Constructions>(Constructions)
            .values(construction)
            .execute();

        const pm = new EmployerModel(req.body.projectManager, 1);
        const sm = new EmployerModel(req.body.shopsManager, 1);
        const dp = new EmployerModel(req.body.depositor, 1);

        await getConnection()
            .createQueryBuilder()
            .insert()
            .into<ProjectsManager>(ProjectsManager)
            .values(pm)
            .execute();


        await getConnection()
            .createQueryBuilder()
            .insert()
            .into<ShopsManager>(ShopsManager)
            .values(sm)
            .execute();
        
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into<Depositors>(Depositors)
            .values(dp)
            .execute();

        return res.status(201).json("Construccion Creada")
    } catch (e) {
        console.log(e);
        res.status(500).json("Error al crear Contruccion")
    }
}

