import React, { useMemo } from "react";
import { useTable } from "react-table";
import PenVector from "../assets/Pen-vector.png";
import DeleteVector from "../assets/Delete-vector.png";
import "../styles/Table.scss";

const Appointment = (props) => {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "col1", // accessor is the "key" in the data
      },

      {
        Header: "Email",
        accessor: "col2",
      },
      {
        Header: "Date",
        accessor: "col3",
      },
      {
        Header: "Visit Time",
        accessor: "col4",
      },
      {
        Header: "Doctor",
        accessor: "col5",
      },
      {
        Header: "Conditions",
        accessor: "col6",
      },
      {
        Header: "",
        accessor: "col7",
      },
    ],
    []
  );
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
          <img src={DeleteVector} alt="Delete Vector" />,
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
          <img src={DeleteVector} alt="Delete Vector" />,
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
          <img src={DeleteVector} alt="Delete Vector" />,
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
          <img src={DeleteVector} alt="Delete Vector" />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List5[6]} alt="avatar5" />,
          props.data.data.List10[0],
        ],
        col2: props.data.data.List5[1],
        col3: props.data.data.List5[2],
        col4: props.data.data.List5[3],
        col5: props.data.data.List5[4],
        col6: props.data.data.List5[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img src={DeleteVector} alt="Delete Vector" />,
        ],
      },
    ],
    [props.data.data]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <div className="table">
      <p>Appointment Activity</p>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {" "}
                      <div className="image-name">{cell.render("Cell")} </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Appointment;