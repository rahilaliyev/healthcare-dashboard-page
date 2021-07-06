import React, { useState, useEffect } from "react";
import "./Table.scss";
import { useSelector, useDispatch } from "react-redux";
import ModalButtonTable from "../../Appointment/ModalButtonTableDelete";
import PenVector from "../../../assets/Pen-vector.png";
import DeleteVector from "../../../assets/Delete-vector.png";
import { littleTableData } from "../../../redux/actions/actions";
import axios from "axios";
import moment from "moment";

const Table = () => {
  const tableInfoData = useSelector(
    (state) => state.littleTableDataReducer.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://desolate-hamlet-85078.herokuapp.com/getData")
      .then((res) => dispatch(littleTableData(res.data.List2)))
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
              <td>{moment.unix(row.Date.seconds).format("MM/DD/YYYY")}</td>
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
