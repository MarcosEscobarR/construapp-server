"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const usuarios_1 = __importDefault(require("../routes/usuarios"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const Construction_1 = __importDefault(require("../routes/Construction"));
class Server {
    constructor() {
        this.routes = {
            usuario: '/api/usuarios',
            construction: '/api/construction',
        };
        this.app = express_1.default();
        typeorm_1.createConnection().then();
        this.port = process.env.port;
        this.middlewares();
        this.router();
    }
    router() {
        this.app.use(this.routes.usuario, usuarios_1.default);
        this.app.use(this.routes.construction, Construction_1.default);
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map