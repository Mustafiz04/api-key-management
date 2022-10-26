import { validationResult } from 'express-validator'
import { CustomError } from '../helpers'

function checkValidation(req, res, next) {
  try {
    const err = validationResult(req)
    if( !err.isEmpty() ){
      throw new CustomError(400, "", err.array())
    }

    next()
  } catch (error) {
    throw error
  }
}

export default checkValidation