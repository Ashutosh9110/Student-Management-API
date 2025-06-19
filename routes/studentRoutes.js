

const express = require("express")
const router = express.Router()
const studentController = require("../controller/studentControllerSEQ")


router.post("/", studentController.addStudent)
// router.get("/", studentController.getAllStudents)
// router.get("/:id", studentController.getStudentById)
router.put("/:id", studentController.updateStudents)
router.delete("/:id", studentController.deleteStudents)



module.exports = router
