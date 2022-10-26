'use strict'

import { Sequelize, Model, DataTypes } from 'Sequelize'
import { SQL_CONFIG } from '../../config'

const { SQL_DB } = SQL_CONFIG

const nameSchema = SQL_DB.define('name', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  },
  name: { 
    type: Sequelize.STRING,
  }
})

export default nameSchema