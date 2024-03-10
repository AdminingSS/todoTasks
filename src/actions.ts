import {Action, Task} from './interfaces'

export const addTask = (task: string) : Action => ({
  type: 'ADD_TASK',
  payload: task,
})

export const editTask = (task: Task) : Action => ({
  type: 'EDIT_TASK',
  payload: task,
})

export const deleteTask = (taskId: number) : Action => ({
  type: 'DELETE_TASK',
  payload: taskId,
})

export const toggleTaskStatus = (taskId: number) : Action => ({
  type: 'TOGGLE_TASK_STATUS',
  payload: taskId,
})

export const setFilter = (filter: string) : Action => ({
  type: 'SET_FILTER',
  payload: filter,
})