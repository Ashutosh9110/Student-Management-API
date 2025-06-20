  const express = require("express")
  const db = require("./utils/db-connection")
  const app = express()

  const studentRoutes = require("./routes/studentRoutes")
  // const studentModels = require("./models/students")

  require("./models")

  app.use(express.json())
  app.use("/students", studentRoutes)

  db.sync().then(() => {
    app.listen(3000, () => {
      console.log("Server running at PORT 3000");
    })
  }).catch((err) => {
    console.log(err);
  })



