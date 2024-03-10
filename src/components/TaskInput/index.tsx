import React, {useState} from 'react'
import ButtonEl from "../Button"

import { createUseStyles } from 'react-jss'

import styles from './styles'
import {MIN_TASK_NAME_LENGTH} from "../../constants"

const useStyles = createUseStyles(styles)

interface TaskInputProps {
  onSubmit: (name: string) => void
  defaultValue?: string
}

const TaskInput: React.FC<TaskInputProps> = ({onSubmit, defaultValue = ''}) => {
  const classes = useStyles()

  const [newTaskName, setNewTaskName] = useState(defaultValue!)
  const [error, setError] = useState('')

  const handleSubmit = () : void => {
    if (newTaskName.trim().length >= MIN_TASK_NAME_LENGTH) {
      onSubmit(newTaskName.trim())
      setNewTaskName(defaultValue!)
    } else {
      setError('Task name must be at least ' + MIN_TASK_NAME_LENGTH + ' characters long')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTaskName(e.target.value)

    if(error.length && newTaskName.trim().length >= MIN_TASK_NAME_LENGTH) {
      setError('')
    }
  }

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleAddButtonClick = (): void => {
    handleSubmit()
  }

  return (
    <div className={classes.root}>
      <input
        className={classes.inputField}
        type="text"
        placeholder="Add a new task..."
        value={newTaskName}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      <ButtonEl className={classes.addTaskButton} onClick={handleAddButtonClick}>Add Task</ButtonEl>
      {!!error.length && <div className={classes.error}>{error}</div>}
    </div>
  )
}

export default TaskInput