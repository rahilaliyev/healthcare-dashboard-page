import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import PenVector from "../assets/Pen-vector.png";
// import DeleteVector from "../assets/Delete-vector.png";
import "../styles/Table.scss";
// import ModalButtons from "./ModalButtons";
import axios from "axios";
import { addData } from "../redux/actions/actions";

const BigTable = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.getElementsByClassName("tablePage")[1].style.backgroundColor =
      "blue";
    document.getElementsByClassName("tablePage")[1].style.color = "white";
    axios
      .get("https://desolate-hamlet-85078.herokuapp.com/getData")
      .then((res) => dispatch(addData(res.data.Lists.slice(0, 10))))
      .catch((err) => console.log(err));
  }, [dispatch]);
  // const [ModalIsOpen, setModalIsOpen] = useState(false);
  // const setModal = () => {
  //   setModalIsOpen(false);
  // };
  // const columns = useMemo(() => COLUMNS, []);
  const data = useSelector((state) => state.allDataReducer.data);

  const handlePagination = (e) => {
    if (e.target.innerHTML === "1") {
      axios
        .get("https://desolate-hamlet-85078.herokuapp.com/getData")
        .then((res) => dispatch(addData(res.data.Lists.slice(0, 5))))
        .catch((err) => console.log(err));
    }
    document.getElementsByClassName("tablePage")[1].style.backgroundColor =
      "white";
  };

  const buttons = [
    {
      number: "<",
      id: 0,
    },
    {
      number: 1,
      id: 1,
    },
    {
      number: 2,
      id: 2,
    },
    {
      number: 3,
      id: 3,
    },
    {
      number: ">",
      id: 4,
    },
  ];

  return (
    <div className="table-wrapper">
      <div className="table">
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Tel</th>
            <th>Doctor</th>
            <th>Appoiafnao</th>
            <th>afafafaf</th>
          </thead>
          {/* <tbody>
            {data.map((row) => (
              <>
                <tr>
                  <td>
                    <img src={row.Image} alt="tablePhoto" /> {row.Name}
                  </td>
                  <td>{row.Email}</td>
                  <td>{row.Date}</td>
                  <td>{row.VisitTime}</td>
                  <td>{row.Doctor}</td>
                  <td>{row.Conditions}</td>
                </tr>
              </>
            ))}
          </tbody> */}
        </table>
        <div className="table-buttons">
          {buttons.map((item, key) => (
            <button
              key={item.id}
              onClick={handlePagination}
              className="tablePage"
            >
              {item.number}
            </button>
          ))}
        </div>
      </div>
      {/* <ModalButtons ModalIsOpen={ModalIsOpen} setModal={setModal} /> */}
    </div>
  );
};

export default BigTable;
