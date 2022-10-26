'use strict'

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import { SERVER_CONFIG } from './config'
import startServer from './startServer'
import Routes from './api/routes'

const { BODY_LIMIT, CORS_OPTIONS } = SERVER_CONFIG

const app = new express()

// Middleware Initializations
app.use(express.json())
app.use(cors(CORS_OPTIONS))
app.use(bodyParser.json({ limit: BODY_LIMIT }))
app.use(bodyParser.urlencoded({ limit: BODY_LIMIT, extended: true }))
app.use(helmet())

Routes.init(app)

startServer(app)

module.exports = app