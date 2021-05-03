import React, { useEffect } from "react";
import "../styles/Appointment.scss";
import BigTable from "./BigTable";
import Search from "./Search";

const Appointment = (props) => {
  useEffect(() => console.log(props));
  return (
    <div className="appointment">
      <Search />
      <h2>Appointments</h2>
      <BigTable data={props} />
    </div>
  );
};

export default Appointment;
