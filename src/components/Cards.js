import React from "react";
import "../styles/Cards.scss";
import { useSelector } from "react-redux";

const Cards = () => {
  const CardsLists = useSelector((state) => state.allDataReducer.data.CardInfo);

  return (
    <div className="cards">
      {CardsLists.map((item, key) => (
        <div className="card-lists" key={key}>
          <img src={item.Image} alt={item.AltImage} key={key} />
          <div className="info-and-number">
            <p>{item.Text}</p>
            <p>{item.Value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
