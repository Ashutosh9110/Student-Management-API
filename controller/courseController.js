const Course = require("../models/courses")
const Student = require("../models/students")

const addCourse = async (req, res) => {
  try {
    const { name } = req.body
    const course = await Course.create({ name })

    return res.status(201).json(course)

  } catch (error) {
      res.status(500).json({ "error" : error.message})
  }
}

const addStudentToCourses = async (req, res) => {
  
  try {
    const { studentId, courseId } = req.body
    const student = await Student.findByPk(studentId)
    const course = await Course.findAll({
      where: {
        id:courseId
      }
    })

    await student.addCourses(course)
    const updatedStudent = await Student.findByPk(studentId,{include:Course})
    res.status(200).json(updatedStudent)


  } catch (error) {
    // res.status(500).json({"error":error.message})
  }

}


module.exports = {addCourse, addStudentToCourses}