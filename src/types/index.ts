import React, { Dispatch } from 'react'

export interface ITodoItemProps {
  item: ITodo
  onComplete(id: number): void
  onDelete(id: number): void
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
  id: number
  text: string
  completed: boolean
}

export interface IInputProps extends ITodoSearchProps {
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
  completedTodos: number
  totalTodos: number
  searchValue: string
  setSearchValue: Dispatch<React.SetStateAction<string>>
  todos: ITodo[]
  filteredTodos: ITodo[]
  completeTodo: (id: number) => void
  deleteTodo: (id: number) => void
}
