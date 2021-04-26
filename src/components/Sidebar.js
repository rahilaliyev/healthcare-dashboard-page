import React from "react";
import Logo from "../assets/logo.png";
import "../styles/Sidebar.scss";
import DashboardIcon from "../assets/Dashboard-icon.png";
import AppointmentsIcon from "../assets/Appointments-icon.png";
import DoctorsIcon from "../assets/Doctors-icon.png";
import DepartmentsIcon from "../assets/Departments-icon.png";
import PatientsIcon from "../assets/Patients-icon.png";
import PaymentsIcon from "../assets/Payments-icon.png";
import HelpIcon from "../assets/Help-icon.png";

const Sidebar = () => {
  const SidebarLists = [
    {
      image: DashboardIcon,
      list: "Dashboard",
    },
    {
      image: AppointmentsIcon,
      list: "Appointments",
    },
    {
      image: DoctorsIcon,
      list: "Doctors",
    },
    {
      image: DepartmentsIcon,
      list: "Departments",
    },
    {
      image: PatientsIcon,
      list: "Patients",
    },
    {
      image: PaymentsIcon,
      list: "Payments",
    },
    {
      image: HelpIcon,
      list: "Help",
    },
  ];
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <p>MEDICINE</p>
        <ul>
          {SidebarLists.map((item, key) => (
            <li>
              <img src={item.image} alt="" key={key} />
              <a href="/" key={key}>
                {item.list}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
