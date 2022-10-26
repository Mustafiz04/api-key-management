'use strict'

import Express from 'express'
import { requestHandler } from '../helpers'
import { ApiKeyController } from '../controllers'

const ApiKeyRouter = new Express.Router()
const { get, create } = ApiKeyController

const { routeSanity, asyncWrapper } = requestHandler

// HealthRouter.use(extractHeaders)

ApiKeyRouter.get('/', routeSanity, asyncWrapper(get))
ApiKeyRouter.post('/', routeSanity, asyncWrapper(create))
// ApiKeyRouter.get('/:id', routeSanity, asyncWrapper(getById))
// ApiKeyRouter.patch('/:id', routeSanity, asyncWrapper(updateById))
// ApiKeyRouter.delete('/:id', routeSanity, asyncWrapper(deleteById))


// HealthRouter.use(setHeaders)

export default ApiKeyRouter
