import React from "react";
import { ITodoListProps } from "../../types/types";
import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.css";
export const TodoList = (props: ITodoListProps) => {
  return (
    <>
      <section>
        <ul>
          {props.todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem item={todo} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
