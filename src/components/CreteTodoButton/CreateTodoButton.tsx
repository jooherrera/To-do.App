import React from "react";
import PropTypes from "prop-types";
import { ITodoCreateButtonProps } from "../../types/types";
import "./CreateTodoButton.css";
export const CreateTodoButton = (props: ITodoCreateButtonProps) => {
  return (
    <>
      <button className="button">{props.name}</button>
    </>
  );
};
