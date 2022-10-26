'use strict'

import Express from 'express'
import { requestHandler } from '../helpers'
import { AuthController } from '../controllers'

const AuthRouter = new Express.Router()
const { get, startSession } = AuthController

const { routeSanity, asyncWrapper } = requestHandler

// HealthRouter.use(extractHeaders)

AuthRouter.get('/', routeSanity, asyncWrapper(get))
AuthRouter.post('/session', routeSanity, asyncWrapper(startSession))
// AuthRouter.post('/', routeSanity, asyncWrapper(create))
// ApiKeyRouter.get('/:id', routeSanity, asyncWrapper(getById))
// ApiKeyRouter.patch('/:id', routeSanity, asyncWrapper(updateById))
// ApiKeyRouter.delete('/:id', routeSanity, asyncWrapper(deleteById))


// HealthRouter.use(setHeaders)

export default AuthRouter
