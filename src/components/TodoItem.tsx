import React from "react";
import { ITodoItemProps } from "../types/types";

export const TodoItem = (props: ITodoItemProps) => {
  return (
    <>
      <li>
        <span>C</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    </>
  );
};
