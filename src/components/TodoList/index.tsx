import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createUseStyles } from 'react-jss'

import TaskEl from '../Task'
import ButtonEl from '../Button'

import styles from './styles'

const useStyles = createUseStyles(styles)

import {addTask, setFilter} from '../../actions'

import { Task, State } from '../../interfaces'
import { AppDispatch } from "../../store"

import { MIN_TASK_NAME_LENGTH } from "../../constants"

type TodoListProps = {
  title?: string
}

const TodoList: React.FC<TodoListProps> = ({title = 'ToDo List'}) => {
  const classes = useStyles()

  type DispatchFunc = () => AppDispatch
  const useAppDispatch: DispatchFunc = useDispatch
  const dispatch = useAppDispatch()

  const [newTaskName, setNewTaskName] = useState('')

  const tasks = useSelector((state: State) => {
    if (state.filter === 'all') return state.tasks
    return state.filter === 'completed'
      ? state.tasks.filter((task: Task) => task.completed)
      : state.tasks.filter((task: Task) => !task.completed)
  })

  const handleAddTask = (): void => {
    if (newTaskName.trim().length >= MIN_TASK_NAME_LENGTH) {
      dispatch(addTask(newTaskName.trim()))
      setNewTaskName('')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTaskName(e.target.value)
  }

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  const handleAddButtonClick = (): void => {
    handleAddTask()
  }

  const handleFilterChange = (filter: string) : void => {
    dispatch(setFilter(filter))
  }

  const completedTasksCount = tasks.filter((task: Task) => task.completed).length
  const uncompletedTasksCount = tasks.length - completedTasksCount

  const tasksMap = tasks.map((task: Task) =>
    <TaskEl key={task.id} task={task} />
  )

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.filters}>
        <ButtonEl onClick={() => handleFilterChange('all')}>All</ButtonEl>
        <ButtonEl className={classes.completedButton} onClick={() => handleFilterChange('completed')}>Completed</ButtonEl>
        <ButtonEl  className={classes.currentButton} onClick={() => handleFilterChange('current')}>Current</ButtonEl>
      </div>
      <ul className={classes.tasksList}>
        <li className={classes.taskListHead}>
          <div>#</div>
          <div>Task Name</div>
          <div>Status</div>
          <div>Edit</div>
          <div>Remove</div>
        </li>
        {tasksMap.length ? tasksMap : <div className={classes.noTasks}>'No tasks available'</div>}
      </ul>
      <div className={classes.addTask}>
        <input
          className={classes.inputField}
          type="text"
          placeholder="Add a new task..."
          value={newTaskName}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
        />
        <ButtonEl className={classes.addTaskButton} onClick={handleAddButtonClick}>Add Task</ButtonEl>
      </div>
      <p>Task summary: completed - {completedTasksCount}, in progress - {uncompletedTasksCount}</p>
    </div>
  )
}

export default TodoList