import React from "react";
import ToggleCompleteTodos from "./Components/ToggleCompleteTodos";
import TodoForm from "./Components/TodoForm";
import { Box, Container } from "@material-ui/core";

export default class TodoInput extends React.Component {
  render() {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "0",
          paddingRight: "0",
        }}
        maxWidth="sm"
        fixed="true"
      >
        <ToggleCompleteTodos
          todosCount={this.props.todosCount}
          toggleCompleted={this.props.toggleCompleted}
        />
        <TodoForm addTodo={this.props.addTodo} />
      </Container>
    );
  }
}
