import React from 'react'
import { ITodoListProps } from '../../types'
import { TodoItem } from '../TodoItem'
import './TodoList.css'
export const TodoList = (props: ITodoListProps) => {
  return (
    <>
      <section>
        <ul>
          {props.todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem
                item={todo}
                onComplete={props.onComplete}
                onDelete={props.onDelete}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
