import React from "react";
import FilterButtons from "./Components/FilterButtons";
import ActiveTodosCount from "./Components/ActiveTodosCount";
import ClearCompleted from "./Components/ClearCompleted";
import { Container } from "@material-ui/core";

export default class Footer extends React.Component {
  render() {
    return (
      <Container
        maxWidth="sm"
        fixed="true"
        style={{
          display: "flex",
          paddingTop: "5px",
          paddingLeft: "5px",
          paddingRight: "0",
        }}
      >
        <ActiveTodosCount activeCount={this.props.todosCount.activeCount} />
        <FilterButtons switchFilter={this.props.switchFilter} />
        {this.props.todosCount.completedCount > 0 && (
          <ClearCompleted clearCompleted={this.props.clearCompleted} />
        )}
      </Container>
    );
  }
}
