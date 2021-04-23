import {Request, Response} from "express";

export const getUsuarios =(req: Request, res: Response) => {
    res.status(200).json({
        msg: 'getUsuarios'
    })
}
export const getUsuario =(req: Request, res: Response) => {
    const {id} = req.params;

    res.status(200).json({
        msg: 'getUsuario',
        id
    })
}
export const postUsuarios =(req: Request, res: Response) => {
    const {body} = req;

    res.status(200).json({
        msg: 'postUsuarios',
        body
    })
}
export const putUsuarios =(req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req;

    res.status(200).json({
        msg: 'putUsuarios',
        id, body
    })
}
export const deleteUsuarios =(req: Request, res: Response) => {
    const {id} = req.params;

    res.status(200).json({
        msg: 'deleteUsuarios',
        id
    })
}