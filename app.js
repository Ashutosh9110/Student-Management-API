  const express = require("express")
  const db = require("./utils/db-connection")
  const app = express()

  const studentRoutes = require("./routes/studentRoutes")
  const courseRoutes = require("./routes/courseRoutes")
  // const studentModels = require("./models/students")

  require("./models")

  app.use(express.json())
  app.use("/students", studentRoutes)
  app.use("/courses", courseRoutes)

  db.sync({force: true}).then(() => {
    app.listen(3000, () => {
      console.log("Server running at PORT 3000");
    })
  }).catch((err) => {
    console.log(err);
  })



