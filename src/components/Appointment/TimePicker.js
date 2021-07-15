import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
  },
  textField: {
    width: 150,
    height: 100,
    margin: 10,
  },
}));
const TimePicker = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div noValidate className={classes.container}>
        <TextField
          ref={props.StartVisitTime}
          onChange={(e) => {
            props.StartVisitTime.current.value = e.target.value;
          }}
          className={classes.textField}
          id="time"
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
        
        />
        <TextField
          className={classes.textField}
          onChange={(e) => (props.EndVisitTime.current.value = e.target.value)}
          ref={props.EndVisitTime}
          id="time"
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
      
        />
      </div>
    </div>
  );
};

export default TimePicker;
