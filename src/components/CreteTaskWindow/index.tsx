import { useContext } from 'react'
import { context } from '../../context'
import { Input } from '../Input'
import './CreateTaskWindow.css'

const CreateTaskWindow = () => {
  const { inputValue, addNewTask, loading } = useContext(context)
  const handToast = () => {
    addNewTask!()
  }

  return (
    <>
      <div className="CreateTaskWindow">
        <h2 className="CTW-title px-5">Create new task</h2>
        <p className="CTW-sub px-5">Task Title</p>
        <div className="CTW-Input mx-5 ">
          <Input placeholder="Add new task. [Min 5 letters]" />
        </div>

        <button
          type="button"
          className="btn btn-success d-flex align-items-center justify-content-center mt-4 "
          onClick={handToast}
          disabled={loading || inputValue!.length <= 5}
          id="liveToastBtn"
          data-bs-dismiss="modal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="me-2">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
          Save Task
        </button>

        <div className="CTW-img "></div>
      </div>
    </>
  )
}

export default CreateTaskWindow
