import React, { Dispatch } from 'react'

export interface ITodoItemProps {
  item: ITodo
  // onComplete(id: number): void
  // onDelete(id: number): void
}

export interface ITodoListProps {
  todos: ITodo[]
  onComplete(id: number): void
  onDelete(id: number): void
}

export interface ITodoCreateButtonProps {
  name: string
}

export interface ITodo {
  id: string
  text: string
  completed: boolean
}

export interface IInputProps {
  placeholder: string
  isSearch?: boolean
}

export interface ITodoSearchProps {
  searchValue?: string
  setSearchValue?: Dispatch<React.SetStateAction<string>>
}

export interface ITodiCounterProps {
  completed: number
  total: number
}

export interface IAppUIProps {
  loading: boolean
  error: boolean
  completedTodos: number
  totalTodos: number
  searchValue: string
  setSearchValue: Dispatch<React.SetStateAction<string>>
  todos: ITodo[]
  filteredTodos: ITodo[]
  completeTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export interface IContext {
  loading: boolean
  error: boolean
  completedTodos: number
  totalTodos: number
  searchValue: string
  setSearchValue: Dispatch<React.SetStateAction<string>>
  todos: ITodo[]
  completeTodo: (id: string) => void
  deleteTodo: (id: string) => void
  toast: boolean
  setToast: Dispatch<React.SetStateAction<boolean>>
  inputValue: string
  setInputValue: Dispatch<React.SetStateAction<string>>
  addNewTask: () => void
  lastTaskAdded: string
  setMobileAddTask: Dispatch<React.SetStateAction<boolean>>
  mobileAddTask: boolean
}

export interface IProvider {
  children: IContext
}
