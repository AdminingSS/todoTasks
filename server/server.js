/* eslint-disable */
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 3001

const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/tasks'
mongoose.connect(MONGO_URL).catch(error => {
  console.error(error)
})

const Task = mongoose.model('Task', {
  id: Number,
  name: String,
  completed: Boolean,
})

app.use(bodyParser.json())
app.use(cors())

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

app.post('/tasks', async (req, res) => {
  try {
    const { id, name, completed } = req.body
    const newTask = new Task({
      id,
      name,
      completed,
    })
    await newTask.save()
    res.json(newTask)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

app.put('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id
    const updatedTask = await Task.findOneAndUpdate(
      { id: taskId },
      { $set: req.body },
      { new: true }
    )
    res.json(updatedTask)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

app.delete('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id
    await Task.findOneAndDelete({ id: taskId })
    res.json({ message: 'Task deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
