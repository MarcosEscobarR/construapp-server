import express, {Application} from 'express';
import usuariosRouter from "../routes/usuarios";
import cors from 'cors';
import {createConnection} from 'typeorm'
import constructionRouter from "../routes/Construction";

export class Server {
    private app: Application;
    private readonly port: string | undefined;
    private routes = {
        usuario : '/api/usuarios',
        construction : '/api/construction',
    };

    constructor() {
        this.app = express();
        createConnection().then();
        this.port = process.env.port;

        this.middlewares();
        this.router();
    }
    
    router() {
        this.app.use(this.routes.usuario, usuariosRouter)
        this.app.use(this.routes.construction, constructionRouter)
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        })
    }
}
