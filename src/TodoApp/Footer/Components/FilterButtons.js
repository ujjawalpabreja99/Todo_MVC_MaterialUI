import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  centre: {
    paddingLeft: "104px",
    paddingRight: "76px",
  },
  buttonStyle: {
    background: "transparent",
    minWidth: "20px",
    fontSize: "13px",
    fontWeight: "400",
    color: grey["500"],
    margin: "1px",
    textTransform: "none",
    "&:hover": {
      background: "transparent",
      borderColor: "#A1A5D9",
    },
    "&:focus": {
      background: "transparent",
      borderColor: "#3F51B5",
    },
  },
}));
export default function FilterButtons(props) {
  const classes = useStyles();

  return (
    <Box
      className={classes.centre}
      style={{ display: "inline", justifyContent: "center" }}
    >
      <Button
        size="small"
        variant="outlined"
        className={classes.buttonStyle}
        onClick={() => props.switchFilter("All")}
      >
        All
      </Button>
      <Button
        size="small"
        variant="outlined"
        className={classes.buttonStyle}
        onClick={() => props.switchFilter("Active")}
      >
        Active
      </Button>
      <Button
        size="small"
        variant="outlined"
        className={classes.buttonStyle}
        onClick={() => props.switchFilter("Completed")}
      >
        Completed
      </Button>
    </Box>
  );
}
