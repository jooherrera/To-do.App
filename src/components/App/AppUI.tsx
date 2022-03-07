import { IAppUIProps } from '../../types'
import CreateTaskWindow from '../CreteTaskWindow'
import { TodoCounter } from '../TodoCounter'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { TodoTitle } from '../TodoTitle'

export const AppUI = (props: IAppUIProps) => {
  const {
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    todos,
    filteredTodos,
    completeTodo,
    deleteTodo,
  } = props
  return (
    <>
      <div className="App-container row h-100 justify-content-evenly ">
        <div className="col-5 h-100 ">
          <CreateTaskWindow />
        </div>
        <div className="col-5 h-100 ">
          <div className="List-Container">
            <TodoTitle />
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <TodoList
              todos={searchValue === '' ? todos : filteredTodos}
              onComplete={completeTodo}
              onDelete={deleteTodo}
            />
          </div>
        </div>
      </div>
    </>
  )
}
