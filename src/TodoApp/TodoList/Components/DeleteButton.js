import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export default function DeleteButton(props) {
  const todo = props.todo;
  return (
    <IconButton aria-label="delete" onClick={() => props.deleteTodo(todo.id)}>
      <DeleteIcon />
    </IconButton>
  );
}
