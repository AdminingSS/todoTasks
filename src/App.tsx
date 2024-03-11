import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from "axios"
import TodoList from './components/TodoList'
import { AppDispatch } from './store'
import { fetchTasksSuccess } from './actions'

import { API_URL } from "./constants"

const App: React.FC = () => {
  type DispatchFunc = () => AppDispatch
  const useAppDispatch: DispatchFunc = useDispatch
  const dispatch = useAppDispatch()

  const fetchTasks = () : void => {
    axios.get(API_URL)
      .then((response) => response.data)
      .then((tasks) => dispatch(fetchTasksSuccess(tasks)))
      .catch((error) => {
        console.error('Error fetching tasks:', error)
        throw error
      })
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TodoList />
  )
}

export default App