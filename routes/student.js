import express from 'express'
import pool from '../database'

const router = express.Router()

/* GET students listing. */
router.get('/', (req, res) => {
  pool.query('SELECT * FROM students', (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error retrieving the Users' })
    } else {
      res.status(200).send(result.rows)
    }
  })
})

router.get('/:id', (req, res) => {
  pool.query('SELECT * FROM students where id = $1', [req.params.id], (err, result) => {
    if (err) {
      res.status(500).json(err)
    } else if (!result.rows[0]) {
      res.status(404).json({ message: 'id not found.' })
    } else {
      res.status(200).send(result.rows[0])
    }
  })
})

router.post('/', (req, res) => {
  const {name, email, age, dob, department} = req.body
  pool.query('INSERT INTO students (name,email,age,dob,department,created_at,updated_at) VALUES ($1,$2,$3,$4,$5,now(),now()) RETURNING *;', [name, email, age, dob,department], (err, result) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).send(result.rows[0])
    }
  })
})

router.put('/:id', (req, res) => {
  const student = req.body

  const updateQuery = `update students
                       set name = '${student.name}',
                       email = '${student.email}',
                       age = '${student.age}',
                       dob = '${student.dob}',
                       department = '${student.department}',
                       updated_at = now()
                       where id = ${req.params.id} RETURNING *;`

  pool.query(updateQuery, (err, result) => {
    if (err) {
      res.status(500).json(err)
    } else if (!result.rows[0]) {
      res.status(404).json({ message: 'id not found.' })
    } else {
      res.status(200).send(result.rows[0])
    }
  })
})

router.delete('/:id', (req, res) => {
  pool.query('DELETE FROM students where id = $1', [req.params.id], (err) => {
    if (err) {
      res.status(500).send()
    } else {
      res.status(200).send()
    }
  })
})

module.exports = router
