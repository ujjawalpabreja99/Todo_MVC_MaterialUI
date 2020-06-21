import React from "react";
import { Box } from "@material-ui/core";

export default class Description extends React.Component {
  render() {
    const todo = this.props.todo;
    if (todo.status === "Completed") {
      return (
        <Box
          style={{ fontSize: "24px" }}
          onDoubleClick={this.props.handleDoubleClick}
        >
          <s>{todo.description}</s>
        </Box>
      );
    } else {
      return (
        <Box
          style={{ fontSize: "24px" }}
          onDoubleClick={this.props.handleDoubleClick}
        >
          {todo.description}
        </Box>
      );
    }
  }
}
