import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { grey } from "@material-ui/core/colors";

export default function ToggleStatus(props) {
  const todo = props.todo;
  return (
    <Checkbox
      edge="start"
      iconStyle={{ fill: grey[700] }}
      inputStyle={{ color: grey[700] }}
      style={{ color: grey[700], marginRight: "15px" }}
      checked={todo.status === "Completed"}
      disableRipple
      color="#64c9b9"
      inputProps={{ "aria-label": "checkbox with default color" }}
      onChange={() => props.toggleTodo(todo.id)}
    />
  );
}
