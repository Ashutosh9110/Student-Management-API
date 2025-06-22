const { Sequelize, DataTypes, STRING, INTEGER } = require("sequelize")
const sequelize = require("../utils/db-connection")


const studentCourses = sequelize.define("studentCourses", {
  id: {
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  }
})

module.exports = studentCourses