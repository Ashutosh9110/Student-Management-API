









const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "1234", {
  host: "localhost",
  dialect: "mysql"
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to database has been created");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;




// const { Sequelize } = require("sequelize")

// const sequelize = new Sequelize("testdb", "root", "1234", {
//   host: "localhost",
//   dialect: "mysql"
// })


// // (async () => {
// //   try {
// //   await sequelize.authenticate()
// //   console.log("Connection to database has been created");
// // } catch (error) {
// //     console.log(error);
// // } 
// // })()

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection to database has been created");
//   } catch (error) {
//     console.log(error);
//   }
// })();


// module.exports = sequelize


// const mysql = require("mysql2")



  // const connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "1234",
  //   database: "testdb"
  // })


  // connection.connect((err) => {
  //   if (err) {
  //     console.log(err.message);
  //     return
  //   }
  //   console.log("Connection has been established");
  // })


  // const studentTable = `CREATE TABLE IF NOT EXISTS studentss (
  //   id INT AUTO_INCREMENT PRIMARY KEY,
  //   name VARCHAR(255),
  //   email VARCHAR(255) UNIQUE,
  //   age INT
  // )`;


  // connection.query(studentTable, (err) => {
  //   if (err) throw err
  //   console.log("Student table has been created");
  // })

  // module.exports = connection