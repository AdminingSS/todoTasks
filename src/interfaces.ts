export interface Task {
  id: number
  name: string
  completed: boolean
}

export interface State {
  tasks: Task[]
  filter: string
}

export interface Action {
  type: string
  payload: string | number | Task | Task[]
}