import express, {Application} from 'express';
import usuariosRouter from "../routes/usuarios";
import cors from 'cors';


export class Server {
    private app: Application;
    private readonly port: string | undefined;
    private routes = {
        usuario : '/api/usuarios'
    };

    constructor() {
        this.app = express();
        this.port = process.env.port;

        this.middlewares();
        this.router();
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }
    router() {
        this.app.use(this.routes.usuario, usuariosRouter)
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        })
    }
}