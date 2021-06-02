import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./TableDataColumns";
import PenVector from "../assets/Pen-vector.png";
import DeleteVector from "../assets/Delete-vector.png";
import "../styles/Table.scss";
import ModalButtonTable from "./ModalButtonTable";

const Appointment = (props) => {
  const [ModalOpenTable, setModalTable] = useState(false);
  const setModalTableFunc = () => {
    setModalTable(false);
  };
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(
    () => [
      {
        col1: [
          <img src={props.data.data.List1[6]} alt="avatar1" />,
          props.data.data.List1[0],
        ],
        col2: props.data.data.List1[1],
        col3: props.data.data.List1[2],
        col4: props.data.data.List1[3],
        col5: props.data.data.List1[4],
        col6: props.data.data.List1[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalTable(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List2[6]} alt="avatar2" />,
          props.data.data.List2[0],
        ],
        col2: props.data.data.List2[1],
        col3: props.data.data.List2[2],
        col4: props.data.data.List2[3],
        col5: props.data.data.List2[4],
        col6: props.data.data.List2[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalTable(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List3[6]} alt="avatar3" />,
          props.data.data.List3[0],
        ],
        col2: props.data.data.List3[1],
        col3: props.data.data.List3[2],
        col4: props.data.data.List3[3],
        col5: props.data.data.List3[4],
        col6: props.data.data.List3[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalTable(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List4[6]} alt="avatar4" />,
          props.data.data.List4[0],
        ],
        col2: props.data.data.List4[1],
        col3: props.data.data.List4[2],
        col4: props.data.data.List4[3],
        col5: props.data.data.List4[4],
        col6: props.data.data.List4[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalTable(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List5[6]} alt="avatar5" />,
          props.data.data.List5[0],
        ],
        col2: props.data.data.List5[1],
        col3: props.data.data.List5[2],
        col4: props.data.data.List5[3],
        col5: props.data.data.List5[4],
        col6: props.data.data.List5[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalTable(true)}
          />,
        ],
      },
    ],
    [props.data.data]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columns, data });

  return (
    <section className="table">
      <h5>Appointment Activity</h5>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, key) => (
            <tr key={key} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, key) => (
                <th key={key} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
              .
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, key) => {
            prepareRow(row);
            return (
              <tr key={key} {...row.getRowProps()}>
                {row.cells.map((cell, key) => {
                  return (
                    <td key={key} {...cell.getCellProps()}>
                      <span className="image-name">{cell.render("Cell")} </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalButtonTable
        ModalOpenTable={ModalOpenTable}
        setModalTableFunc={setModalTableFunc}
      />
    </section>
  );
};

export default Appointment;
