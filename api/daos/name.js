'use strict'

import { nameSchema } from '../schemas'

const nameDao = {
  get,
  create,
  getById,
  updateById,
  deleteById
}

async function get(){
  const data = await nameSchema.findAll()
  return data
}

async function create(data) {
  const newName = await nameSchema.create(data)
  return newName
}

async function getById (id) {
  const data = await nameSchema.findByPk(id)
  return data
}

async function updateById (id, body) {
  const data = await nameSchema.update(body, {
    where: {
      id
    }
  })
  return data
}

async function deleteById (id) {
  const data = await nameSchema.destroy({
    where: {
      id
    }
  })
  return data
}

export default nameDao