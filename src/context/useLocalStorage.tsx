import { useEffect, useState } from 'react'
import { ITodo } from '../types'

function useLocalStorage(key: string) {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(key)
        let parsedItem: ITodo[]

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem)
        } else {
          localStorage.setItem(key, '[]')
          parsedItem = []
        }

        setTodos(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }, 2000)
  }, [key])

  const saveTodos = (newItem: ITodo[]) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(key, stringifiedItem)
      setTodos(newItem)
    } catch (error) {
      setError(true)
    }
  }

  return { loading, error, todos, saveTodos }
}

export { useLocalStorage }
