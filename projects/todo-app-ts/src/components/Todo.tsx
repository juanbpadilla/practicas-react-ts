import { TodoId, Todo as TodoType } from "../types"

interface Props extends TodoType {
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }: Props) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          // TODO: esto podría enviarse desde mas arriba con el id para evitar el prop drilling
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}