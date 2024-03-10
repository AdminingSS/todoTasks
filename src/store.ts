import { createStore, applyMiddleware } from 'redux'

import reducer from './reducer'
import apiMiddleware from './middleware'

const store = createStore(reducer, applyMiddleware(apiMiddleware))

export type AppDispatch = typeof store.dispatch

export default store