'use strict'

import { SERVER_CONFIG, MONGO_CONFIG, SQL_CONFIG } from './config'
import { allSchemas } from "./api/schemas"

const { PORT } = SERVER_CONFIG
const { mongoConnect } = MONGO_CONFIG
const { MYSQLConnect } = SQL_CONFIG

const startServer = async (app) => {
  try {
    await app.listen(PORT)

    // await mongoConnect()
    // await MYSQLConnect(allSchemas)

    console.log(`[Info] Server Started Successfully! on port ${PORT}`)
  } catch(err) {
    console.log(err)
    process.exit(1)
  }
}

export default startServer