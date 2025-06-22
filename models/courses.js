const { Sequelize, DataTypes } = require("sequelize")
const { INTEGER, STRING } = require("sequelize")
const sequelize = require("../utils/db-connection")


const courses = sequelize.define("courses", {
  id: {
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull:false
  }
})


module.exports = courses