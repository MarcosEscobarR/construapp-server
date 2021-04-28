export class EmployerModel {
    userId: number;
    constructionId: number;
    
    constructor(userId: number, constructionId: number) {
        this.userId = userId;
        this.constructionId = constructionId
    }
}