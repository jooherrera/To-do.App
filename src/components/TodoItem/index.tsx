import { useContext } from 'react'
import { context } from '../../context'
import { ITodoItemProps } from '../../types'
import './TodoItem.css'

export const TodoItem = (props: ITodoItemProps) => {
  const { completeTodo, deleteTodo } = useContext(context)

  const handleComplete = (id: string) => {
    if (completeTodo) {
      completeTodo(id)
    }
  }

  const handleDelete = (id: string) => {
    if (deleteTodo) {
      deleteTodo(id)
    }
  }

  return (
    <>
      <div className="TodoItem-Container ">
        <span
          className={`btn centerDiv ${
            props.item.completed ? 'checkBtn' : ' checkBtnFalse'
          }`}
          onClick={() => handleComplete(props.item.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 18 18">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </span>
        <p className={`centerDiv ${props.item.completed ? 'TodoDone' : null}`}>
          {props.item.text}
        </p>
        <span
          className="btn deleteBtn centerDiv"
          onClick={() => handleDelete(props.item.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 18 18">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </span>
      </div>
    </>
  )
}
