import { IAppUIProps, IContext } from '../../types'
import CreateTaskWindow from '../CreteTaskWindow'
import { TodoCounter } from '../TodoCounter'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { TodoTitle } from '../TodoTitle'
import { context } from '../../context'
import { useContext } from 'react'
import { Modal } from '../Modal'

export const AppUI = () => {
  const { statusModal, error, loading, totalTodos } = useContext(context)

  return (
    <>
      <div className="App-container row h-100 justify-content-evenly ">
        <div className="col-5 h-100 ">
          <CreateTaskWindow />
        </div>
        <div className="col-5 h-100 ">
          <div className="List-Container">
            <TodoTitle />
            <TodoCounter />
            <TodoSearch />
            {error && <p className="mt-3">Hubo un error</p>}
            {loading && !error && <p className="mt-3">Cargando</p>}
            {!loading && totalTodos === 0 && (
              <p className="mt-3">Crea tu primer To-Do</p>
            )}
            <TodoList />
            {statusModal ? (
              <Modal>
                <p>Teletransportacioooooooooooooooon</p>
              </Modal>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}
