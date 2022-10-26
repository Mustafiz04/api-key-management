'use strict'

import { CustomError } from '../helpers'
import { nameDao } from '../daos'

const HealthModel = {
  get,
  create,
  getById,
  updateById,
  deleteById
}

export default HealthModel

async function get () {
  // const data = await nameDao.get()
  // if (data.length === 0) {
  //   throw new CustomError(404, "Data not found")
  // }
  return {message: "you are in get function"}
}


async function create (body) {
  const data = await nameDao.create(body)
  return data
}

async function getById (params) {
  const { id = '' } = params
  const data = await nameDao.getById(id)
  return data
}

async function updateById (params, body) {
  const { id = '' } = params
  const data = await nameDao.updateById(id, body)
  return data
}

async function deleteById (params) {
  const { id = '' } = params
  const data = await nameDao.deleteById(id)
  return data
}