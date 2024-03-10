import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'

import { createUseStyles } from 'react-jss'

import Check from '../../icons/Check'
import Close from '../../icons/Close'
import Delete from '../../icons/Delete'
import Edit from '../../icons/Edit'

import Button from '../Button'
import TaskInput from "../TaskInput"

import styles from './styles'

const useStyles = createUseStyles(styles)

import { editTask, deleteTask, toggleTaskStatus } from '../../actions'

import { Task } from '../../interfaces'
import { AppDispatch } from "../../store"

interface TaskProps {
  task: Task
}

const Task: React.FC<TaskProps> = ({task}) => {
  const classes = useStyles()

  type DispatchFunc = () => AppDispatch
  const useAppDispatch: DispatchFunc = useDispatch
  const dispatch = useAppDispatch()

  const [isEdit, setIsEdit] = useState(false)

  const handleToggleStatus = (taskId: number) : void => {
    dispatch(toggleTaskStatus(taskId))
  }

  const handleEditTask = (name): void => {
    const editedTask = {
      id: task.id,
      name: name,
      completed: task.completed
    }
    dispatch(editTask(editedTask))
    setIsEdit(false)
  }

  const handleDeleteTask = (taskId: number): void => {
    dispatch(deleteTask(taskId))
  }

  const handleEditButtonClick = (e): void => {
    e.stopPropagation()
    setIsEdit((isEdit) => !isEdit)
  }

  const handleDeleteButtonClick = (e): void => {
    e.stopPropagation()
    handleDeleteTask(task.id)
  }

  return (
    <li
      key={task.id}
      className={classes.root}
    >
      <div>{task.id}</div>
      {isEdit
        ? <TaskInput onSubmit={handleEditTask} defaultValue={task.name} />
        : <div onClick={() => handleToggleStatus(task.id)} className={clsx(classes.task, task.completed ? classes.completedTask : classes.currentTask)}>{task.name}</div>}
      <div className={classes.statusIcon} onClick={() => handleToggleStatus(task.id)}>{task.completed ? <Check className={clsx(classes.icon, classes.completedTask)} /> : <Close className={clsx(classes.icon, classes.currentTask)} />}</div>
      <div><Button className={clsx(classes.iconButton, classes.editButton)} onClick={handleEditButtonClick}><Edit className={classes.icon} /></Button></div>
      <div><Button className={clsx(classes.iconButton, classes.deleteButton)} onClick={handleDeleteButtonClick}><Delete className={classes.icon} /></Button></div>
    </li>
  )
}

export default Task