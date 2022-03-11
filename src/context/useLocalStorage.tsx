import { useEffect, useReducer, useState } from 'react'
import { ActionType, IAction, IReducerObject, ITodo, IUseState } from '../types'

function useLocalStorage(key: string) {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    loading: true,
    error: false,
  })

  // const [todos, setTodos] = useState<ITodo[]>([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)

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

        // setTodos(parsedItem)
        dispatch({ type: ActionType.SAVE, payload: parsedItem })

        // setLoading(false)
        dispatch({ type: ActionType.LOADING })
      } catch (error) {
        dispatch({ type: ActionType.ERROR })
        // setError(true)
      }
    }, 2000)
  }, [key])

  const saveTodos = (newItem: ITodo[]) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(key, stringifiedItem)
      // setTodos(newItem)
      dispatch({ type: ActionType.SAVE, payload: newItem })
    } catch (error) {
      // setError(true)
      dispatch({ type: ActionType.ERROR })
    }
  }

  return {
    loading: state.loading!,
    error: state.error!,
    todos: state.todos!,
    saveTodos,
  }
}

export { useLocalStorage }

const reducerObject = (
  state?: IUseState,
  action?: IAction
): IReducerObject => ({
  ERROR: { ...state, error: true },
  SAVE: { ...state, todos: action?.payload },
  LOADING: { ...state, loading: false },
})

const reducer = (state: IUseState, action: IAction) => {
  return reducerObject(state, action)[action.type] || state
}
