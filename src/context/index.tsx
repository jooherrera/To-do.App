import React, { FC, useEffect, useState } from 'react'
import { IContext, ITodo } from '../types'
import { useLocalStorage } from './useLocalStorage'
import { v4 as uuid4 } from 'uuid'

const context = React.createContext<Partial<IContext>>({})

const Provider: FC = ({ children }) => {
  const [mobileAddTask, setMobileAddTask] = useState(false)
  const [lastTaskAdded, setLastTaskAdded] = useState('')
  const [toast, setToast] = useState(false) //MODAL
  const [inputValue, setInputValue] = useState('') //Input new Task

  const { todos, saveTodos, loading, error } = useLocalStorage('TODOS_v1')
  const [searchValue, setSearchValue] = useState('')
  const [added, setAdded] = useState(0)

  const completedTodos = todos!.filter((todo: ITodo) => !!todo.completed).length

  const totalTodos = todos!.length

  useEffect(() => {
    setTimeout(() => {
      setToast(false)
    }, 4000)
  }, [added])

  const addNewTask = () => {
    const newTodos: ITodo[] = [...todos!]
    const newTask: ITodo = {
      id: uuid4(),
      text: inputValue,
      completed: false,
    }
    newTodos.push(newTask)
    saveTodos(newTodos)
    setToast(true)
    setLastTaskAdded(newTask.text)
    setAdded(added + 1)
  }

  const completeTodo = (id: string) => {
    const newTodos: ITodo[] = [...todos!]
    const todoIndex = todos!.findIndex((todo: ITodo) => todo.id === id)
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (id: string) => {
    const newTodos: ITodo[] = [...todos!]
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
        completeTodo,
        deleteTodo,
        toast,
        setToast,
        inputValue,
        setInputValue,
        addNewTask,
        lastTaskAdded,
        setMobileAddTask,
        mobileAddTask,
      }}>
      {children}
    </context.Provider>
  )
}

export { context, Provider }
