import {Router} from 'express'

import {Create} from "../controllers/Construction.controller"
const constructionRouter = Router();

constructionRouter.get('/', )
constructionRouter.get('/:id', )
constructionRouter.post('/', Create)
constructionRouter.put('/', )

export default constructionRouter;