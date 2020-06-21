import React from "react";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";
import { Container, Divider } from "@material-ui/core";

export default function ToDoList(props) {
  return (
    <div>
      <Container
        maxWidth="sm"
        fixed="true"
        style={{ paddingLeft: "8px", paddingRight: "0" }}
      >
        <List component="nav" aria-label="main mailbox folders">
          {props.todos.map((todo) => {
            return <TodoItem {...props} todo={todo} />;
          })}
        </List>
      </Container>
      {props.todos.length > 0 && <Divider />}
    </div>
  );
}
