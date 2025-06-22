const db = require("../utils/db-connection")
const Student = require("../models/students")
// const Students = require("../models/students")
const IdentityCard = require("../models/identityCard")
// const identityCard = require("../models/identityCard")


const addStudent = async (req, res) => {
  try {
    const { name, email, age } = req.body
    const student = await Student.create({
      email, name, age
    })
    
    res.status(200).send(`User with name: ${name} has been created`)

  } catch (error) {
    res.status(500).send('Unable to make an entry')

    
  }

}


const addingValuesToStudentAndIdentityTable = async (req, res) => {
  try {
    const student = await Student.create(req.body.student)
    const idCard = await IdentityCard.create({
      ...req.body.IdentityCard,
      StudentId:student.id

    })

    res.status(201).json({ student, idCard})

  } catch (error) {
    res.status(500).json({error:error.message})
  }
}



const updateStudents = async (req, res) => {

  try {
  const { id } = req.params
  const { name } = req.body

  const student = await Student.findByPk(id)
  if(!student) {
    res.status(404).send("User is not found")
  }

  student.name = name
  await student.save()

  res.status(200).send("User has been updated")
  } catch (error) {
    res.status(500).send("User cannot be updated")
  }
   
}

const deleteStudents = async (req, res) => {
    try {
      const { id } = req.params
      const student = await Student.destroy({
        where: {
          id:id
        }
      })
      if(!student) {
        res.status(404).send("Student is not found")
      }
        res.status(200).send("Student has been deleted")
    } catch (error) {
      console.log(error);
        res.status(500).send("Error encountered while deleting")
    }

}






module.exports = {
  addStudent,
  // getAllStudents,
  // getStudentById,
  updateStudents,
  deleteStudents,
  addingValuesToStudentAndIdentityTable

}