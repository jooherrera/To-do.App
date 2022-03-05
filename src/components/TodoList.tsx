import React from "react";
import { ITodoListProps } from "../types/types";

export const TodoList = (props: ITodoListProps) => {
  return (
    <>
      <section>
        <ul>{props.children}</ul>
      </section>
    </>
  );
};
