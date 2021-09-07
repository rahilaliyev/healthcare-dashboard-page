import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import TimePicker from "@material-ui/lab/TimePicker";

const DateTimePicker = (props) => {
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="Basic example"
          ref={props.StartVisitTime}
          value={startValue}
          onChange={(e) => {
            console.log(e);
            setStartValue((props.StartVisitTime.current.value = e));
          }}
          renderInput={(params) => <TextField {...params} label="" />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="Basic example"
          ref={props.EndVisitTime}
          value={endValue}
          onChange={(e) => {
            setEndValue((props.EndVisitTime.current.value = e));
          }}
          renderInput={(params) => <TextField {...params} label="" />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateTimePicker;
