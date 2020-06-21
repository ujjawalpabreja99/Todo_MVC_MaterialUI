import React from "react";
import DeleteButton from "./Components/DeleteButton";
import Description from "./Components/Description";
import ToggleStatus from "./Components/ToggleStatus";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

export default function RenderTodo(props) {
  const todo = props.todo;
  return (
    <ListItem key={todo.id} role={undefined} dense>
      <ListItemIcon>
        <ToggleStatus todo={todo} toggleTodo={props.toggleTodo} />
      </ListItemIcon>
      <ListItemText fixed="true">
        <Description todo={todo} handleDoubleClick={props.handleDoubleClick} />
      </ListItemText>
      <ListItemSecondaryAction>
        <DeleteButton todo={todo} deleteTodo={props.deleteTodo} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}
