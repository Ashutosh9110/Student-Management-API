

const express = require("express")
const router = express.Router()
const studentController = require("../controller/studentControllerSEQ")


router.post("/add", studentController.addStudent)
// router.get("/", studentController.getAllStudents)
// router.get("/:id", studentController.getStudentById)
router.put("/update/:id", studentController.updateStudents)
router.delete("/delete/:id", studentController.deleteStudents)
router.post("/addingStudentWithCard", studentController.addingValuesToStudentAndIdentityTable)



module.exports = router
