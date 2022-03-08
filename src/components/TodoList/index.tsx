import React, { useContext } from 'react'
import { context } from '../../context'
import { ITodo, ITodoListProps } from '../../types'
import { TodoItem } from '../TodoItem'
import './TodoList.css'
export const TodoList = () => {
  const { searchValue, filteredTodos, todos } = useContext(context)
  let todoList: ITodo[]
  if (searchValue === '') {
    todoList = todos || []
  } else {
    todoList = filteredTodos || []
  }

  return (
    <>
      <section>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <TodoItem item={todo} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
