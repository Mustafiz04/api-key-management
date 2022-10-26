'use strict'

import { reponseHandler } from '../helpers'

import HealthRouter from './Health'
import ApiKeyRouter from './ApiKey'
import AuthRouter from './Auth'


const { ResponseBody, handleResponse } = reponseHandler

const Routes = [
  { path: '/health', router: HealthRouter },
  { path: '/apikey', router: ApiKeyRouter },
  { path: '/auth', router: AuthRouter }
]

Routes.init = (app) => {
  if (!app || !app.use) {
    console.error('[Error] Route Initialization Failed: app / app.use is undefined')
    return process.exit(1)
  }

  // Custom Routes
  Routes.forEach(route => app.use(route.path, route.router))

  // Final Route Pipeline
  app.use('*', (request, response, next) => {
    if (!request.isMatched) {
      const {
        method,
        originalUrl
      } = request
      const message = `Cannot ${method} ${originalUrl}`
      const error = new ResponseBody(404, message)
      response.body = error
    }
    // const success = new ResponseBody(200, "HELLO WORLD", [{"NAME": "MUSTAFIZ", "asd": 'asdfsd'}])
    // response.body = success
    return handleResponse(request, response, next)
  })

  // Route Error Handler
  app.use((error, request, response, next) => {
    // logger.log('Final error logger', error)
    if (!error) {
      return process.nextTick(next)
    }

    const {
      statusCode = 500, message
    } = error
    let responseBody

    if (error.constructor.name === 'ResponseBody') {
      responseBody = error
    } else if (typeof error.getResponseBody === 'function') {
      responseBody = error.getResponseBody()
    } else {
      responseBody = new ResponseBody(statusCode, message, undefined, error)
    }

    response.body = responseBody
    return handleResponse(request, response, next)
  })
}

export default Routes
