import axios from 'axios'

import { API_URL } from "./constants"

const createTaskOnServer = (task) : void => {
  axios.post(API_URL, task)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
}

const updateTaskOnServer = (id, taskPart) : void => {
  const editUrl = API_URL + '/' + id
  axios.put(editUrl, taskPart)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
}

const deleteTaskOnServer = (taskId) : void => {
  const deleteUrl = API_URL + '/' + taskId
  axios.delete(deleteUrl)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
}

const apiMiddleware = (state) => (next) => (action) : void => {
  if (action.type === 'ADD_TASK') {
    const index = state.tasks?.length || 0
    const task = {
      id: index + 1,
      name: action.payload,
      completed: false
    }
    createTaskOnServer(task)
  }

  if (action.type === 'EDIT_TASK') {
    const task = action.payload
    updateTaskOnServer(task.id, task)
  }

  if (action.type === 'TOGGLE_TASK_STATUS') {
    const taskId = action.payload
    const currentStatus = state.tasks?.find(task => task.id === taskId)?.completed || false
    const taskPart = {
      completed: !currentStatus
    }
    updateTaskOnServer(taskId, taskPart)
  }

  if (action.type === 'DELETE_TASK') {
    const taskId = action.payload
    deleteTaskOnServer(taskId)
  }

  return next(action)
}

export default apiMiddleware