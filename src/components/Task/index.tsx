import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'

import { createUseStyles } from 'react-jss'

import Check from '../../icons/Check'
import Close from '../../icons/Close'
import Delete from '../../icons/Delete'
import Edit from '../../icons/Edit'

import Button from '../Button'

import styles from './styles'

const useStyles = createUseStyles(styles)

import { editTask, deleteTask, toggleTaskStatus } from '../../actions'

import { Task } from '../../interfaces'
import { AppDispatch } from "../../store"

import { MIN_TASK_NAME_LENGTH } from "../../constants"

interface TaskProps {
  task: Task
}

const Task: React.FC<TaskProps> = ({task}) => {
  const classes = useStyles()

  type DispatchFunc = () => AppDispatch
  const useAppDispatch: DispatchFunc = useDispatch
  const dispatch = useAppDispatch()

  const [newTaskName, setNewTaskName] = useState(task.name)
  const [isEdit, setIsEdit] = useState(false)

  const handleToggleStatus = (taskId: number) : void => {
    dispatch(toggleTaskStatus(taskId))
  }

  const handleEditTask = (): void => {
    if (newTaskName.trim().length >= MIN_TASK_NAME_LENGTH) {
      const editedTask = {
        id: task.id,
        name: newTaskName.trim(),
        completed: task.completed
      }
      dispatch(editTask(editedTask))
      setIsEdit(false)
    }
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTaskName(e.target.value)
  }

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleEditTask()
    }
  }

  const handleEditSubmitButtonClick = (e): void => {
    e.stopPropagation()
    handleEditTask()
  }

  return (
    <li
      key={task.id}
      className={classes.root}
    >
      <div>{task.id}</div>
      {isEdit
        ? 
        <div className={classes.editTask}>
          <input
            className={classes.inputField}
            type="text"
            placeholder="Edit task..."
            value={newTaskName}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
          <Button className={classes.editTaskButton} onClick={handleEditSubmitButtonClick}>Edit Task</Button>
        </div>
        
        : <div onClick={() => handleToggleStatus(task.id)} className={clsx(classes.task, task.completed ? classes.completedTask : classes.currentTask)}>{task.name}</div>}
      <div className={classes.statusIcon} onClick={() => handleToggleStatus(task.id)}>{task.completed ? <Check className={clsx(classes.icon, classes.completedTask)} /> : <Close className={clsx(classes.icon, classes.currentTask)} />}</div>
      <div><Button className={clsx(classes.iconButton, classes.editButton)} onClick={handleEditButtonClick}><Edit className={classes.icon} /></Button></div>
      <div><Button className={clsx(classes.iconButton, classes.deleteButton)} onClick={handleDeleteButtonClick}><Delete className={classes.icon} /></Button></div>
    </li>
  )
}

export default Task