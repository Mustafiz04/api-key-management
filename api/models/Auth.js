'use strict'

import { CustomError } from '../helpers'
const jwt = require('jsonwebtoken');

const AuthModel = {
  get,
  startSession,
  // create,
  // getById,
  // updateById,
  // deleteById
}

export default AuthModel

const data = [
  {
    email: 'abc@gmail.com',
    secretAccessKeyId: "+FpMP9YnY9G+9xwWARtHGwz/MLZIFWGxfcrJHp5+",
    accessKeyId: "YLcPE2LTq9L0iuuKz68R",
    active: true,
    plan: 'basic'
  },
  {
    email: 'def@gmail.com',
    secretAccessKeyId: "7NvU9ZcBBAcwhZKFkDRZ+PcfTYGBfSkw8Dz3LpK5",
    accessKeyId: "ubyOnPyIXJL5hqGM9aRC",
    active: true,
    plan: 'standard'
  },
  {
    email: 'ghi@gmail.com',
    secretAccessKeyId: "oKsJKyh6/yKz1X40LO10OFy7Y7nnt+nOuSXCxkXW",
    accessKeyId: "15kgj6i0RaIPivWs8yJL",
    active: true,
    plan: 'advance'
  }
]

async function get() {
  try {
    // const data = await nameDao.get()
    // if (data.length === 0) {
    //   throw new CustomError(404, "Data not found")
    // }
    return { message: "you are in Auth GET function" }
  } catch (error) {
    console.log(error)
  }
}

async function startSession(body) {
  try {
    const { accessKeyId = '', secretAccessKeyId = '' } = body
    const user = data.filter(d => {
      return (d.accessKeyId == accessKeyId && d.secretAccessKeyId == secretAccessKeyId)
    })
    if(user.length == 0){
      throw new CustomError(404, "User not found") 
    }
    const payload = {
      email: user[0].email,
      plan: user[0].plan
    }
    console.log(payload)
    const accessToken = jwt.sign(payload, "TOKEN", { expiresIn: "2d" });
    return { accessToken }
  } catch (error) {
    throw error
  }
}

// async function create(body) {
//   // const data = await nameDao.create(body)
//   return
// }

// async function getById (params) {
//   const { id = '' } = params
//   const data = await nameDao.getById(id)
//   return data
// }

// async function updateById (params, body) {
//   const { id = '' } = params
//   const data = await nameDao.updateById(id, body)
//   return data
// }

// async function deleteById (params) {
//   const { id = '' } = params
//   const data = await nameDao.deleteById(id)
//   return data
// }