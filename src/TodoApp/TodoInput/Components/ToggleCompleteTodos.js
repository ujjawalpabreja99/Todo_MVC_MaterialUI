import React from "react";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Checkbox from "@material-ui/core/Checkbox";

export default class ToggleCompleteTodos extends React.Component {
  render() {
    return (
      <Checkbox
        color="primary"
        style={{
          marginRight: "6px",
          marginTop: "15px",
          marginBottom: "15px",
        }}
        inputProps={{ "aria-label": "secondary checkbox" }}
        onChange={(e) => this.props.toggleCompleted(e.target.checked)}
        checked={
          this.props.todosCount.activeCount === 0 &&
          this.props.todosCount.completedCount > 0
        }
      />
    );
  }
}
