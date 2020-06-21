import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  hover: {
    background: "transparent",
    fontSize: "13px",
    fontWeight: "400",
    color: grey["500"],
    minWidth: "0",
    padding: "0",
    textTransform: "none",
    "&:hover": {
      background: "transparent",
      textDecoration: "underline",
    },
  },
}));

export default function ClearCompleted(props) {
  const classes = useStyles();
  return (
    <Button
      size="small"
      className={classes.hover}
      onClick={() => props.clearCompleted()}
    >
      Clear completed
    </Button>
  );
}
