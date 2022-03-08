import CreateTaskWindow from '../CreteTaskWindow'
import { TodoCounter } from '../TodoCounter'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { TodoTitle } from '../TodoTitle'
import { context } from '../../context'
import { useContext } from 'react'
import { Modal } from '../Modal'
import { MobileButton } from '../MobileButton'

export const AppUI = () => {
  const { error, loading, totalTodos, lastTaskAdded } = useContext(context)

  return (
    <>
      <div className="App-container row h-100 justify-content-evenly ">
        <div className="col-md-5 h-100 createWindow ">
          <CreateTaskWindow />
        </div>
        <div className="col-md-5 col-sm-12 h-100 listWindow ">
          <div className="List-Container">
            <TodoTitle />
            <TodoCounter />
            <TodoSearch />
            {error && <p className="mt-3">Something has gone wrong!!</p>}
            {loading && !error && <p className="mt-3">Loading..</p>}
            {!loading && totalTodos === 0 && (
              <p className="mt-3">Add your first To-Do</p>
            )}
            <TodoList />
          </div>
        </div>
        <Modal>
          <p>Task added: {lastTaskAdded!}</p>
        </Modal>

        <MobileButton />
      </div>
    </>
  )
}
