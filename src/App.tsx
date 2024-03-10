import React from 'react'
import { Provider } from 'react-redux'
import TodoList from './components/TodoList'
import store from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
}

export default App