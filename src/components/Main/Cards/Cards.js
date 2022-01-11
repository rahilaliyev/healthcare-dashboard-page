import React, { useEffect, useState } from "react";
import "./Cards.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cardData } from "../../../redux/actions/actions";
import Loading from "../../Loading/Loading"

const Cards = () => {
  const CardsLists = useSelector((state) => state.cardDataReducer.data);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios
      .get("https://desolate-hamlet-85078.herokuapp.com/getData")
      .then((res) => dispatch(cardData(res.data.CardInfo)))
      .catch((err) => console.log(err));
    setloading(false);
  }, [dispatch]);

  if (loading) {
    return <div><Loading/></div>;
  }

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
