import React, { useState } from "react"
import { TodoTitle } from "../types"

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo = ({ saveTodo }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="¿Qué quieres hacer?"
        autoFocus
      />
    </form>
  )
}