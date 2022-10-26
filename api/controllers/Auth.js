'use strict'

import { reponseHandler } from '../helpers'
import { AuthModel } from '../models'

const { ResponseBody } = reponseHandler

const AuthController = {
  get,
  startSession,
  // create,
  // getById,
  // updateById,
  // deleteById
}

export default AuthController

async function get (request, response, next) {
  const data = await AuthModel.get()
  const responseBody = new ResponseBody(200, 'Get Successful', data)
  response.body = responseBody
  process.nextTick(next)
}

async function startSession (request, response, next) {
  const { body = {} } = request
  const data = await AuthModel.startSession(body)
  const responseBody = new ResponseBody(200, 'Session started successful', data)
  response.body = responseBody
  process.nextTick(next)
}

// async function getById (request, response, next) {
//   const { params = {} }= request
//   const data = await HealthModel.getById(params)
//   const responseBody = new ResponseBody(200, 'Get Successful', data)
//   response.body = responseBody
//   process.nextTick(next)
// }

// async function updateById (request, response, next) {
//   const { params = {}, body = {} }= request
//   const data = await HealthModel.updateById(params, body)
//   const responseBody = new ResponseBody(200, 'Update Successful', data)
//   response.body = responseBody
//   process.nextTick(next)
// }

// async function deleteById (request, response, next) {
//   const { params = {} }= request
//   const data = await HealthModel.deleteById(params)
//   const responseBody = new ResponseBody(200, 'Deleted Successful', data)
//   response.body = responseBody
//   process.nextTick(next)
// }