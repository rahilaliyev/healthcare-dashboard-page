import React from "react";
import "../styles/Appointment.scss";
import BigTable from "./BigTable";
import Search from "./Search";
import BigIcon from "../assets/doctor-appointment-icon.png";

const Appointment = (props) => {
  return (
    <section className="appointment">
      <Search />
      <h2>Appointments</h2>
      <BigTable data={props} />
      <div className="icon">
        <img src={BigIcon} alt="Icon"></img>
      </div>
    </section>
  );
};

export default Appointment;
