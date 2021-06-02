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
      alt: AppointmentsMainLogo,
    },
    {
      image: PatientsMainLogo,
      text: "New Patients",
      value: props.data.data.CardInfo[1],
      alt: PatientsMainLogo,
    },
    {
      image: OperationsMainLogo,
      text: "Operations",
      value: props.data.data.CardInfo[2],
      alt: OperationsMainLogo,
    },
    {
      image: HospitalEarningMainLogo,
      text: "Hospital Earnings",
      value: props.data.data.CardInfo[3],
      alt: HospitalEarningMainLogo,
    },
  ];
  return (
    <div className="cards">
      {CardsLists.map((item, key) => (
        <div className="card-lists" key={key}>
          <img src={item.image} alt={item.alt} key={key} />
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
