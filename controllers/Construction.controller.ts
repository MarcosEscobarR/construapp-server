import {Request, Response} from "express";
import {CreateConstructionModel} from "../models/Construction/CreateConstructionModel";
import {getConnection} from "typeorm";
import {Constructions} from "../entity/Constructions.entity";
import {ConstructionStatus} from "../helpers/Constrans";
import {ProjectsManager} from "../entity/ProjectsManager.entity";
import moment from "moment";

export const Create = async (req: Request, res: Response) => {
    const body = req.body as CreateConstructionModel;
    let construction: Constructions = {
        created_at: moment().calendar(),
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
            
        let projectsManagers: ProjectsManager[] = []
        
        body.projectManager.forEach(pm => {
            const npm = new ProjectsManager(construction, pm)
            projectsManagers.push(npm);
        })
        
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into<ProjectsManager[]>(ProjectsManager)
            .values(projectsManagers)
            .execute()
        
        return res.status(201).json("Construccion Creada")
    } catch (e) {
        console.log(e);
        res.status(500).json("Error al crear Contruccion")
    }
}

export const GetAll = async (req: Request, res: Response) => {
    
}

