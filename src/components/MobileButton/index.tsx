import { useContext } from 'react'
import { context } from '../../context'
import { MobileModal } from '../MobileModal'
import './MobileButton.css'

export const MobileButton = () => {
  const { setMobileAddTask, loading } = useContext(context)

  return (
    <>
      <div className="mobileBtn d-sm-none" style={{ zIndex: 1 }}>
        <button
          className=" btnCustom"
          disabled={loading}
          onClick={() => setMobileAddTask!(true)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="btnPrimary"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </button>
      </div>
      <MobileModal />
    </>
  )
}
