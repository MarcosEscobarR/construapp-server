"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarios = exports.putUsuarios = exports.postUsuarios = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.status(200).json({
        msg: 'getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: 'getUsuario',
        id
    });
};
exports.getUsuario = getUsuario;
const postUsuarios = (req, res) => {
    const { body } = req;
    res.status(200).json({
        msg: 'postUsuarios',
        body
    });
};
exports.postUsuarios = postUsuarios;
const putUsuarios = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.status(200).json({
        msg: 'putUsuarios',
        id, body
    });
};
exports.putUsuarios = putUsuarios;
const deleteUsuarios = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: 'deleteUsuarios',
        id
    });
};
exports.deleteUsuarios = deleteUsuarios;
//# sourceMappingURL=usuario.js.map