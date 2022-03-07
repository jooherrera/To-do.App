import { useState } from 'react'
import { ITodo } from '../../types'
import './App.css'

import { AppUI } from './AppUI'

const defaultTodos: ITodo[] = [
  { id: 1, text: 'Cortar cebolla', completed: false },
  { id: 2, text: 'Cortar manzana', completed: false },
  { id: 3, text: 'Cortar papa', completed: false },
  { id: 4, text: 'Cortar banana', completed: true },
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  )

  const completeTodo = (id: number) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (id: number) => {
    const newTodos = [...todos]
    setTodos(newTodos.filter((todo) => todo.id !== id))
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos={todos}
      filteredTodos={filteredTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App
