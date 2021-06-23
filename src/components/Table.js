import React, { useState, useEffect } from "react";
import PenVector from "../assets/Pen-vector.png";
import DeleteVector from "../assets/Delete-vector.png";
import "../styles/Table.scss";
import { useSelector } from "react-redux";
import ModalButtonTable from "./ModalButtonTable";
import axios from "axios";

const Table = () => {
  const data = useSelector((state) =>
    state.allDataReducer.data.Lists.slice(0, 5)
  );
  useEffect(() => {
    const index = 3;
    axios
      .post("https://desolate-hamlet-85078.herokuapp.com/deleteUsers", index)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });

  const [ModalOpenTableDelete, setModalTableDelete] = useState(false);
  const [ModalOpenTableEdit, setModalTableEdit] = useState(false);
  const setModalTableFuncDelete = () => {
    setModalTableDelete(false);
  };
  const setModalTableFuncEdit = () => {
    setModalTableEdit(false);
  };

  return (
    <section className="table">
      <h5>Appointment Activity</h5>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Visit Time</th>
            <th>Conditions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
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
                <td>
                  <span className="image-name">
                    <img
                      src={PenVector}
                      alt="PenVector"
                      onClick={() => setModalTableEdit(true)}
                    />
                    <img
                      src={DeleteVector}
                      alt="DeleteVector"
                      onClick={() => setModalTableDelete(true)}
                    />
                  </span>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <ModalButtonTable
        ModalOpenTableDelete={ModalOpenTableDelete}
        setModalTableFuncDelete={setModalTableFuncDelete}
        ModalOpenTableEdit={ModalOpenTableEdit}
        setModalTableFuncEdit={setModalTableFuncEdit}
      />
    </section>
  );
};

export default Table;
