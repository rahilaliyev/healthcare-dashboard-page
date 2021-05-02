import React, { useMemo } from "react";
import { useTable } from "react-table";
import avatar1 from "../assets/avatar1.png";
import "../styles/Appointment.scss";

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
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        col1: [<img src={avatar1} alt="" />, props.data.data.List1[0]],
        col2: props.data.data.List1[1],
        col3: props.data.data.List1[2],
        col4: props.data.data.List1[3],
        col5: props.data.data.List1[4],
        col6: props.data.data.List1[5],
      },
      {
        col1: props.data.data.List2[0],
        col2: props.data.data.List2[1],
        col3: props.data.data.List2[2],
        col4: props.data.data.List2[3],
        col5: props.data.data.List2[4],
        col6: props.data.data.List2[5],
      },
      {
        col1: props.data.data.List3[0],
        col2: props.data.data.List3[1],
        col3: props.data.data.List3[2],
        col4: props.data.data.List3[3],
        col5: props.data.data.List3[4],
        col6: props.data.data.List3[5],
      },
      {
        col1: props.data.data.List4[0],
        col2: props.data.data.List4[1],
        col3: props.data.data.List4[2],
        col4: props.data.data.List4[3],
        col5: props.data.data.List4[4],
        col6: props.data.data.List4[5],
      },
      {
        col1: props.data.data.List5[0],
        col2: props.data.data.List5[1],
        col3: props.data.data.List5[2],
        col4: props.data.data.List5[3],
        col5: props.data.data.List5[4],
        col6: props.data.data.List5[5],
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
    <div className="appointment">
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
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
