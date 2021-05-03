import React, { useMemo } from "react";
import { useTable } from "react-table";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import avatar7 from "../assets/avatar7.png";
import avatar8 from "../assets/avatar8.png";
import avatar9 from "../assets/avatar9.png";
import avatar10 from "../assets/avatar10.png";
import PenVector from "../assets/Pen-vector.png";
import DeleteVector from "../assets/Delete-vector.png";
import "../styles/Table.scss";

const BigTable = (props) => {
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
        col1: [<img src={avatar1} alt="avatar1" />, props.data.data.List1[0]],
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
        col1: [<img src={avatar2} alt="avatar2" />, props.data.data.List2[0]],
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
        col1: [<img src={avatar3} alt="avatar3" />, props.data.data.List3[0]],
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
        col1: [<img src={avatar4} alt="avatar4" />, props.data.data.List4[0]],
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
        col1: [<img src={avatar5} alt="avatar5" />, props.data.data.List5[0]],
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
      {
        col1: [<img src={avatar6} alt="avatar6" />, props.data.data.List6[0]],
        col2: props.data.data.List6[1],
        col3: props.data.data.List6[2],
        col4: props.data.data.List6[3],
        col5: props.data.data.List6[4],
        col6: props.data.data.List6[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img src={DeleteVector} alt="Delete Vector" />,
        ],
      },
      {
        col1: [<img src={avatar7} alt="avatar7" />, props.data.data.List5[0]],
        col2: props.data.data.List7[1],
        col3: props.data.data.List7[2],
        col4: props.data.data.List7[3],
        col5: props.data.data.List7[4],
        col6: props.data.data.List7[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img src={DeleteVector} alt="Delete Vector" />,
        ],
      },
      {
        col1: [<img src={avatar8} alt="avatar8" />, props.data.data.List5[0]],
        col2: props.data.data.List8[1],
        col3: props.data.data.List8[2],
        col4: props.data.data.List8[3],
        col5: props.data.data.List8[4],
        col6: props.data.data.List8[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img src={DeleteVector} alt="Delete Vector" />,
        ],
      },
      {
        col1: [<img src={avatar9} alt="avatar9" />, props.data.data.List5[0]],
        col2: props.data.data.List9[1],
        col3: props.data.data.List9[2],
        col4: props.data.data.List9[3],
        col5: props.data.data.List9[4],
        col6: props.data.data.List9[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img src={DeleteVector} alt="Delete Vector" />,
        ],
      },
      {
        col1: [<img src={avatar10} alt="avatar10" />, props.data.data.List5[0]],
        col2: props.data.data.List10[1],
        col3: props.data.data.List10[2],
        col4: props.data.data.List10[3],
        col5: props.data.data.List10[4],
        col6: props.data.data.List10[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img src={DeleteVector} alt="Delete Vector" />,
        ],
      },
      {
        col1: [<img src={avatar10} alt="avatar10" />, props.data.data.List5[0]],
        col2: props.data.data.List10[1],
        col3: props.data.data.List10[2],
        col4: props.data.data.List10[3],
        col5: props.data.data.List10[4],
        col6: props.data.data.List10[5],
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
                      <div className="image-name">{cell.render("Cell")} </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="table-buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
};

export default BigTable;
