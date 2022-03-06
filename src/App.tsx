import CreateTaskWindow from "./components/CreteTaskWindow/CreateTaskWindow";
import { CreateTodoButton } from "./components/CreteTodoButton/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { ITodo } from "./types/types";
import "./App.css";
import { TodoTitle } from "./components/TodoTitle/TodoTitle";

const todos: ITodo[] = [
  { id: 1, text: "Cortar cebolla", completed: false },
  { id: 2, text: "Cortar manzana", completed: false },
  { id: 3, text: "Cortar papa", completed: false },
];

function App() {
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
            <form action="" className="">
              <TodoSearch />
            </form>
            <TodoList todos={todos} />
          </div>
        </div>
      </div>

      {/* <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map((el, idx) => (
            <TodoItem key={idx} text={el.text} />
          ))}
        </TodoList>
        <CreateTodoButton sign="+" /> */}
    </>
  );
}

export default App;
