import { check, validationResult } from 'express-validator'
import { CustomError } from '../helpers'

const startSessionValidator = [
  check('secretAccessKeyId')
    .notEmpty()
    .withMessage("Secret Access Key should not be empty"),
  check('accessKeyId')
    .notEmpty()
    .withMessage("Secret Access Key should not be empty")
]

const AuthValidator = {
  startSessionValidator
}

export default AuthValidator