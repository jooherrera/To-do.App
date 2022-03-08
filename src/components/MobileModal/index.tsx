import React, { FC, useContext } from 'react'
import ReactDOM from 'react-dom'
import { context } from '../../context'
import CreateTaskWindow from '../CreteTaskWindow'
import './MobileModal.css'

export const MobileModal: FC = ({ children }) => {
  return ReactDOM.createPortal(
    <div
      className="modal fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add new task
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <CreateTaskWindow />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('mobileModal')!
  )
}
