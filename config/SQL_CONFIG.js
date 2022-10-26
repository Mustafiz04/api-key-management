'use strict'

import Sequelize from 'Sequelize'

const {
  MYSQL_DBNAME = '',
  MYSQL_HOSTS = '',
  MYSQL_USERNAME = '',
  MYSQL_PASSWORD = '',
  MYSQL_PORT = '',
  MYSQL_REPLICASET,
  MYSQL_READ_PREFERENCE,
  MYSQL_PEM_PATH = '',
  MYSQL_SERVER_IDENTITY_CHECK = 'true'
} = process.env

const REQUIRED_CONFIG = [
  'MYSQL_DBNAME',
  'MYSQL_HOSTS',
  'MYSQL_USERNAME',
  'MYSQL_PASSWORD',
  'MYSQL_PORT'
  // 'MYSQL_PEM_PATH'
]

REQUIRED_CONFIG.forEach(key => {
  if (!process.env[key]) {
    console.error('[Error] Missing MYSQL DB Config:', key)
    return process.exit(1)
  }
})


const MYSQL_CREDENTIALS = MYSQL_USERNAME + ':' + MYSQL_PASSWORD
const CONNECTION_URI = `mysql://${MYSQL_CREDENTIALS}@${MYSQL_HOSTS}:${MYSQL_PORT}/${MYSQL_DBNAME}`


const CONFIG = {
  DBNAME: MYSQL_DBNAME,
  CONNECTION_URI,
  OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    promiseLibrary: Promise,
    poolSize: 5,

    // replicaSet: MYSQL_REPLICASET,
    readPreference: MYSQL_READ_PREFERENCE,
  }
}

const SQL_DB = new Sequelize(CONNECTION_URI)

async function syncModel (allSchemas) {
  allSchemas.forEach(async (schema) => {
    await schema.sync()
  })
}

async function MYSQLConnect (allSchemas) {
  try {
    await SQL_DB.authenticate()
    console.log(`[Connection] Connecting to '${MYSQL_HOSTS}/${MYSQL_DBNAME}'`)
    await syncModel(allSchemas)
  } catch (error) {
    console.log(`[Connection] Fail connecting to '${MYSQL_HOSTS}/${MYSQL_DBNAME}'`)
    throw error
  }
} 

const SQL_CONFIG = { MYSQLConnect, SQL_DB }

export default SQL_CONFIG



// import mysql from 'mysql2'


// const pool = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'root',
//   database: 'test',
//   password: 'root'
// })

// export default pool.promise()