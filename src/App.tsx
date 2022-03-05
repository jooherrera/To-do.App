import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { ITodo } from "./types/types";

const todos: ITodo[] = [
  { text: "Cortar cebolla", completed: false },
  { text: "Cortar manzana", completed: false },
  { text: "Cortar papa", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((el, idx) => (
          <TodoItem key={idx} text={el.text} />
        ))}
      </TodoList>
      <CreateTodoButton sign="+" />
    </>
  );
}

export default App;
