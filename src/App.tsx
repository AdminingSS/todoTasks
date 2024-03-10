import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TodoList from './components/TodoList'
import { AppDispatch } from './store'
import { fetchTasksSuccess } from './actions'

const API_URL = 'http://localhost:3001/tasks'

const App: React.FC = () => {
  type DispatchFunc = () => AppDispatch
  const useAppDispatch: DispatchFunc = useDispatch
  const dispatch = useAppDispatch()

  const fetchTasks = () : void => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((tasks) => dispatch(fetchTasksSuccess(tasks)))
      .catch((error) => {
        console.error('Error fetching tasks:', error)
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