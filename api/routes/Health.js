'use strict'

import Express from 'express'
import { requestHandler } from '../helpers'
import { HealthController } from '../controllers'
import { AuthMiddleware } from './../middleware'

const HealthRouter = new Express.Router()
const { get, create, getById, updateById, deleteById } = HealthController
const { validateSession } = AuthMiddleware

const { routeSanity, asyncWrapper } = requestHandler

// HealthRouter.use(extractHeaders)
HealthRouter.use(validateSession)
HealthRouter.get('/', routeSanity, asyncWrapper(get))
HealthRouter.post('/', routeSanity, asyncWrapper(create))
HealthRouter.get('/:id', routeSanity, asyncWrapper(getById))
HealthRouter.patch('/:id', routeSanity, asyncWrapper(updateById))
HealthRouter.delete('/:id', routeSanity, asyncWrapper(deleteById))


// HealthRouter.use(setHeaders)

export default HealthRouter
