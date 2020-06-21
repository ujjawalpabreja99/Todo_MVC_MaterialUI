import React from "react";
import { Box } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

export default class ActiveTodosCount extends React.Component {
  render() {
    return (
      <Box
        style={{
          maxWidth: "80px",
          minWidth: "80px",
          fontWeight: "300",
          fontSize: "14px",
          fontFamily: "Roboto",
          padding: "8px",
        }}
        color={grey[500]}
      >
        {this.props.activeCount}
        {this.props.activeCount === 1 && " task left"}
        {this.props.activeCount !== 1 && " tasks left"}
      </Box>
    );
  }
}
