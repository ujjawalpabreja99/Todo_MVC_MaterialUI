import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "63ch",
    },
  },
}));
export default function TodoForm(props) {
  function handleOnSubmit(event) {
    event.preventDefault();
    props.addTodo(event.target.description.value);
    event.target.description.value = "";
  }

  const classes = useStyles();
  return (
    <form
      id="taskForm"
      style={{ display: "inline" }}
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
      <TextField
        id="filled-basic"
        label="What needs to be done?"
        variant="outlined"
        name="description"
      />
    </form>
  );
}
