import React from "react";
import "../styles/Cards.scss";
import AppointmentsMainLogo from "../assets/Appointments-main-logo.png";
import HospitalEarningMainLogo from "../assets/Hospital-earning-main-logo.png";
import OperationsMainLogo from "../assets/Operations-main-logo.png";
import PatientsMainLogo from "../assets/Patients-main-logo.png";

const Cards = (props) => {
  const CardsLists = [
    {
      image: AppointmentsMainLogo,
      text: "Appointments",
      value: props.data.data.CardInfo[0],
    },
    {
      image: PatientsMainLogo,
      text: "New Patients",
      value: props.data.data.CardInfo[1],
    },
    {
      image: OperationsMainLogo,
      text: "Operations",
      value: props.data.data.CardInfo[2],
    },
    {
      image: HospitalEarningMainLogo,
      text: "Hospital Earnings",
      value: props.data.data.CardInfo[3],
    },
  ];
  return (
    <div className="cards">
      {CardsLists.map((item, key) => (
        <div className="card-lists" key={key}>
          <img src={item.image} alt="" key={key} />
          <div className="info-and-number">
            <p>{item.text}</p>
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
