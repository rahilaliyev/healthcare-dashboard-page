import React, { useState, useEffect } from "react";
import "./Appointment.scss";
import Search from "../Main/Search/Search";
import BigIcon from "../../assets/doctor-appointment-icon.png";
import PenVector from "../../assets/Pen-vector.png";
import DeleteVector from "../../assets/Delete-vector.png";
import "../Main/Table/Table.scss";
import { useSelector, useDispatch } from "react-redux";
import ModalButtonTable from "./ModalButtonTableDelete";
import ModalButtonAdd from "./ModalButtonAdd";
import { tableData } from "../../redux/actions/actions";
import axios from "axios";
import moment from "moment";

const Appointment = () => {
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
  const [ModalOpenAdd, setModalOpenAdd] = useState(false);

  const setModalTableFuncDelete = () => {
    setModalTableDelete(false);
  };
  const setModalTableFuncEdit = () => {
    setModalTableEdit(false);
  };
  const setModalOpenAddFunc = () => {
    setModalOpenAdd(false);
  };
  return (
    <section className="appointment">
      <Search />
      <div className="header-and-button">
        <h2>Appointments</h2>
        <button onClick={() => setModalOpenAdd(true)}>Add</button>
      </div>
      <section className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Visit Time</th>
              <th>Doctor</th>
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
                <td>{moment.unix(row.Date / 1000).format("MM/DD/YYYY")}</td>
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
        <ModalButtonAdd
          ModalOpenAdd={ModalOpenAdd}
          setModalOpenAddFunc={setModalOpenAddFunc}
        />
      </section>

      <div className="icon">
        <img src={BigIcon} alt="Icon"></img>
      </div>
    </section>
  );
};

export default Appointment;
