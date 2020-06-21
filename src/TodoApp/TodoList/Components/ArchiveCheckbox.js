// not used anywhere
import React from "react";
import ArchiveIcon from "@material-ui/icons/Archive";

export default class ArchiveButton extends React.Component {
  render() {
    const todo = this.props.todo;
    const getArchiveClass = (status) => {
      return status !== "Archived"
        ? "checkbox-label archiveCheckbox"
        : "checkbox-label";
    };
    return (
      <div className="checkbox-container circular-container">
        <label className={getArchiveClass(todo.status)}>
          <input
            id="archiveCheckbox"
            type="checkbox"
            onChange={() => this.props.archiveTodo(todo.id)}
            checked={todo.status === "Archived"}
          />
          <ArchiveIcon />
        </label>
      </div>
    );
  }
}
