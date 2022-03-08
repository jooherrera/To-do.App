import { useContext } from 'react'
import { context } from '../../context'
import './TodoCounter.css'
const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(context)
  return (
    <>
      <h2>
        Completed {completedTodos} to {totalTodos}
      </h2>
    </>
  )
}

export { TodoCounter }
