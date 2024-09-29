import { ListOfTodos, TodoId } from "../types"
import { Todo } from "./Todo"


interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos = ({ todos, onRemoveTodo }: Props) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`} >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}