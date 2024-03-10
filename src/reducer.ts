import { State, Action, Task } from './interfaces'

const initialState: State = {
  tasks: [],
  filter: 'all',
}

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'FETCH_TASKS_SUCCESS':
      return {
        ...state,
        tasks: action.payload,
      } as const as State
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            name: action.payload,
            completed: false,
          },
        ],
      } as const as State
    case 'EDIT_TASK':
      const editPayload = action.payload as Task
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === editPayload.id ? editPayload : task
        ),
      } as const as State
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      } as const as State
    case 'TOGGLE_TASK_STATUS':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      } as const as State
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      } as const as State
    default:
      return state
  }
}

export default reducer