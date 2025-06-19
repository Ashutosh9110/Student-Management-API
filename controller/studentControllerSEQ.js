const db = require("../utils/db-connection")
const Student = require("../models/students")


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
  const insertQuery = 'INSERT INTO studentss (name, email, age) VALUES (?, ?, ?)'
  db.execute(insertQuery, [name, email, age], (err) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send(err.message)
    }
    return res.status(201).send(`Student ${name} successfully added`)
  })
}

const getAllStudents = (req, res) => {
  const fetchQuery = 'Select * FROM studentss'
  db.execute(fetchQuery, (err, results) => {
    if(err) {
      console.log(err.message);
      return res.status(500).send(err.message)
    }
    res.status(200).json(results)
  })
}

const getStudentById = (req, res) => {
  const { id } = req.params
  const fetchQuery = 'SELECT * FROM studentss WHERE id = ?'

  db.execute(fetchQuery, [id], (err, results) => {
    if(err) {
      console.log(err.message);
      return res.status(500).send(err.message)
    }
    if (results.length === 0) {
      return res.status(404).send("Student not found")
    }
    return res.status(200).json(results[0])
  })
}

const updateStudents = (req, res) => {
  const { id } = req.params
  const { name, email, age } = req.body
  const fetchQuery = 'UPDATE studentss SET name = ?, email = ?, age = ? WHERE id = ?'

  db.execute(fetchQuery, [name, email, age, id], (err, results) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send(err.message)
    }
    if (results.affectedRows === 0) {
      return res.status(404).send("Student not found")
    }
    return res.status(200).send("Student updated successfully")
  })

}

const deleteStudents = (req, res) => {
  const { id } = req.params
  const deleteQuery = 'DELETE FROM studentss WHERE id = ?'

  db.execute(deleteQuery, [id], (err, results) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send(err.message)
    }
    if (results.affectedRows === 0){
      return res.status(404).send("Student not found")
    }
    console.log(`Student ${id} deleted`);
    return res.status(200).send("Student deleted successfully")
  })
}






module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudents,
  deleteStudents
}