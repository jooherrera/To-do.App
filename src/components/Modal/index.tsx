import { FC, useContext } from 'react'
import ReactDOM from 'react-dom'
import { context } from '../../context'
import './Modal.css'

export const Modal: FC = ({ children }) => {
  const { toast, setToast } = useContext(context)

  return ReactDOM.createPortal(
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
      <div
        id="liveToast"
        className={`toast  ${toast ? 'show ' : 'hide'}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true">
        <div className="toast-header ">
          <img src="favicon-32x32.png" className="rounded me-2" alt="..." />
          <strong className="me-auto">ToDo App</strong>
          <small></small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={() => setToast!(false)}></button>
        </div>
        <div className="toast-body"> {children}</div>
      </div>
    </div>,
    document.getElementById('modal')!
  )
}
