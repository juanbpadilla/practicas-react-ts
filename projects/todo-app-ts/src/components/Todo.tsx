import { TodoId, Todo as TodoType } from "../types"

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo = ({ id, title, completed, onRemoveTodo }: Props) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => { }}
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