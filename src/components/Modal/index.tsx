import { FC, useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { context } from '../../context'
import './Modal.css'

export const Modal: FC = ({ children }) => {
  return ReactDOM.createPortal(
    <div
      className={`alert alert-warning alert-dismissible fade show modal`}
      role="alert">
      ${children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"></button>
    </div>,

    document.getElementById('modal')!
  )
}
