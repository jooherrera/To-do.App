import React, { FC, useEffect, useState } from 'react'
import { IContext, ITodo } from '../types'
import { useLocalStorage } from './useLocalStorage'

const context = React.createContext<Partial<IContext>>({})

const Provider: FC = ({ children }) => {
  const [statusModal, setStatusModal] = useState(false) //MODAL

  const { todos, saveTodos, loading, error } = useLocalStorage('TODOS_v1')
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter((todo: ITodo) => !!todo.completed).length

  const totalTodos = todos.length

  const filteredTodos = todos.filter((todo: ITodo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  )

  const completeTodo = (id: number) => {
    const newTodos: ITodo[] = [...todos]
    const todoIndex = todos.findIndex((todo: ITodo) => todo.id === id)
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (id: number) => {
    const newTodos: ITodo[] = [...todos]
    saveTodos(newTodos.filter((todo: ITodo) => todo.id !== id))
  }

  console.log('RENDER (Antes del useEffect)')

  useEffect(() => {
    console.log('Use effect')
  }, [totalTodos])
  console.log('RENDER (Despues del useEffect)')

  return (
    <context.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        todos,
        filteredTodos,
        completeTodo,
        deleteTodo,
        statusModal,
        setStatusModal,
      }}>
      {children}
    </context.Provider>
  )
}

export { context, Provider }
