import React from 'react'
import { ITodiCounterProps } from '../../types'
import './TodoCounter.css'
const TodoCounter = ({ total, completed }: ITodiCounterProps) => {
  return (
    <>
      <h2>
        Completed {completed} to {total}
      </h2>
    </>
  )
}

export { TodoCounter }
