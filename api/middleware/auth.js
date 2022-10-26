'use strict'

import { CustomError } from '../helpers'
const jwt = require('jsonwebtoken');

const AuthMiddleware = {
  validateSession,
}

export default AuthMiddleware

function validateSession (req, res, next) {
  try {
    const { headers: { accesstoken = '' } } = req
    if ( !accesstoken || !accesstoken.startsWith("Bearer ")){
      throw new CustomError(401, 'Unauthorized')
    } 
    const token = accesstoken.substring(7, accesstoken.length);
    try {
      const decoded = jwt.verify(token, 'TOKEN');
      req.user = decoded;
    } catch(error) {
      throw new CustomError(401, 'Token Expired')
    }
    next()
  } catch (error) {
    throw error
  }
}