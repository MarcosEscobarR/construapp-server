import {ConstructionStatus} from "../../helpers/Constrans";

export interface CreateConstructionModel {
    name: string,
    phone: string,
    status: ConstructionStatus,
    companyId: 1,
    created_at: Date,
    address: string,
    projectManager: number[],
    shopManager: number[],
    depositor: number[],
}