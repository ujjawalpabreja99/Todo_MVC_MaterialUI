import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      paddingLeft: "0.8rem",
      margin: theme.spacing(1),
      width: "55ch",
    },
  },
}));

export default function RenderEditingTodo(props) {
  const [description, setDescription] = useState(props.todo.description || "");
  function handleSubmit() {
    props.saveTodoDescription(description);
  }
  function handleBlur() {
    props.saveTodoDescription(description);
  }
  function handleChange(event) {
    setDescription(event.target.value);
  }
  const classes = useStyles();
  return (
    <ListItem>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          name="editedDescription"
          value={description}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </form>
    </ListItem>
  );
}
