import { useState } from "react"
import { Todos } from "./components/Todos"

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  },
]

function App() {
  const [todos] = useState(mockTodos)

  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  )
}

export default App
