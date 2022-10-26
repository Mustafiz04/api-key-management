'use strict'

import { CustomError } from '../helpers'
import { nameDao } from '../daos'
import { RsaCryptographyUtil } from '../helpers/rsaCryptography'

const ApiKeyModel = {
  get,
  create,
  // getById,
  // updateById,
  // deleteById
}

export default ApiKeyModel

async function generatesScretAccessKey() {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz/+";
  const string_length = 40;
  let secretAccessKey = '';
  for (var i = 0; i < string_length; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    secretAccessKey += chars.substring(rnum, rnum + 1);
  }
  return secretAccessKey
}

async function generateAccessKey() {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const string_length = 20;
  let accessKey = '';
  for (var i = 0; i < string_length; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    accessKey += chars.substring(rnum, rnum + 1);
  }
  return accessKey
}

async function get() {
  try {
    // const data = await nameDao.get()
    // if (data.length === 0) {
    //   throw new CustomError(404, "Data not found")
    // }
    return { message: "you are in API KEY GET function" }
  } catch (error) {
    console.log(error)
  }
}


async function create(body) {
  // const data = await nameDao.create(body)
  const { username, password } = body
  const secretAccessKeyId = await generatesScretAccessKey()
  const accessKeyId = await generateAccessKey()
  return {secretAccessKeyId, accessKeyId}
}

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