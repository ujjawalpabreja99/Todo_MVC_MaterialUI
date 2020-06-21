import React from "react";
import { Container } from "@material-ui/core";

export default class Header extends React.Component {
  render() {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "100px",
          fontWeight: "100",
          fontFamily: "Roboto",
          color: "#3F51B5",
          minWidth: "600px",
          maxWidth: "600px",
        }}
      >
        todos
      </Container>
    );
  }
}
