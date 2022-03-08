import { useContext } from 'react'
import { context } from '../../context'
import { ITodo } from '../../types'
import { TodoItem } from '../TodoItem'
import './TodoList.css'
export const TodoList = () => {
  const { searchValue, todos } = useContext(context)
  let todoList: ITodo[]
  if (searchValue === '') {
    todoList = todos || []
  } else {
    todoList = todos!.filter((todo: ITodo) =>
      todo.text.toLowerCase().includes(searchValue!.toLowerCase())
    )
  }

  return (
    <>
      <section className="sectionList">
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
