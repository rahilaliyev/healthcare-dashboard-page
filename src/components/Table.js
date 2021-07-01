import React, { useState, useEffect } from "react";
import "../styles/Table.scss";
import { useSelector, useDispatch } from "react-redux";
import ModalButtonTable from "./ModalButtonTable";
import PenVector from "../assets/Pen-vector.png";
import DeleteVector from "../assets/Delete-vector.png";
import { tableData } from "../redux/actions/actions";
import axios from "axios";
import moment from "moment";

const Table = () => {
  const tableInfoData = useSelector((state) => state.tableDataReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://desolate-hamlet-85078.herokuapp.com/getData")
      .then((res) => dispatch(tableData(res.data.Lists)))
      .catch((err) => console.log(err));
  }, [dispatch]);

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
          {tableInfoData.map((row) => (
            <tr>
              <td>
                <img src={row.Image} alt="tablePhoto" /> {row.Name}
              </td>
              <td>{row.Email}</td>
              <td>{moment(row.Date.seconds).format("DD/MM/YYYY")}</td>
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
