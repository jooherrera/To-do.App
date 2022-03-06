import React from "react";
import { Input } from "../Input/Input";
import "./CreateTaskWindow.css";
const CreateTaskWindow = () => {
  return (
    <>
      <div className="CreateTaskWindow">
        <h2 className="CTW-title px-5">Create new task</h2>
        <p className="CTW-sub px-5">Task Name</p>
        <form action="" className="px-5">
          <Input placeholder="Add new task" />
          <button
            type="button"
            className="btn btn-success d-flex align-items-center mt-4 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="me-2"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            Save Task
          </button>
        </form>
        <div className="CTW-img "></div>
      </div>
    </>
  );
};

export default CreateTaskWindow;
