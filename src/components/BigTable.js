import React, { useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import { COLUMNS } from "./TableDataColumns";
import PenVector from "../assets/Pen-vector.png";
import DeleteVector from "../assets/Delete-vector.png";
import "../styles/Table.scss";
import ModalButtons from "./ModalButtons";

const BigTable = (props) => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const setModal = () => {
    setModalIsOpen(false);
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
            onClick={() => setModalIsOpen(true)}
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
            onClick={() => setModalIsOpen(true)}
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
            onClick={() => setModalIsOpen(true)}
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
            onClick={() => setModalIsOpen(true)}
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
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List6[6]} alt="avatar6" />,
          props.data.data.List6[0],
        ],
        col2: props.data.data.List6[1],
        col3: props.data.data.List6[2],
        col4: props.data.data.List6[3],
        col5: props.data.data.List6[4],
        col6: props.data.data.List6[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List7[6]} alt="avatar7" />,
          props.data.data.List7[0],
        ],
        col2: props.data.data.List7[1],
        col3: props.data.data.List7[2],
        col4: props.data.data.List7[3],
        col5: props.data.data.List7[4],
        col6: props.data.data.List7[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List8[6]} alt="avatar8" />,
          props.data.data.List8[0],
        ],
        col2: props.data.data.List8[1],
        col3: props.data.data.List8[2],
        col4: props.data.data.List8[3],
        col5: props.data.data.List8[4],
        col6: props.data.data.List8[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List9[6]} alt="avatar9" />,
          props.data.data.List9[0],
        ],
        col2: props.data.data.List9[1],
        col3: props.data.data.List9[2],
        col4: props.data.data.List9[3],
        col5: props.data.data.List9[4],
        col6: props.data.data.List9[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List8[6]} alt="avatar8" />,
          props.data.data.List8[0],
        ],
        col2: props.data.data.List8[1],
        col3: props.data.data.List8[2],
        col4: props.data.data.List8[3],
        col5: props.data.data.List8[4],
        col6: props.data.data.List8[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List9[6]} alt="avatar9" />,
          props.data.data.List9[0],
        ],
        col2: props.data.data.List9[1],
        col3: props.data.data.List9[2],
        col4: props.data.data.List9[3],
        col5: props.data.data.List9[4],
        col6: props.data.data.List9[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List10[6]} alt="avatar10" />,
          props.data.data.List10[0],
        ],
        col2: props.data.data.List10[1],
        col3: props.data.data.List10[2],
        col4: props.data.data.List10[3],
        col5: props.data.data.List10[4],
        col6: props.data.data.List10[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
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
            onClick={() => setModalIsOpen(true)}
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
            onClick={() => setModalIsOpen(true)}
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
            onClick={() => setModalIsOpen(true)}
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
            onClick={() => setModalIsOpen(true)}
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
            onClick={() => setModalIsOpen(true)}
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
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List10[6]} alt="avatar10" />,
          props.data.data.List10[0],
        ],
        col2: props.data.data.List10[1],
        col3: props.data.data.List10[2],
        col4: props.data.data.List10[3],
        col5: props.data.data.List10[4],
        col6: props.data.data.List10[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },

      {
        col1: [
          <img src={props.data.data.List10[6]} alt="avatar10" />,
          props.data.data.List10[0],
        ],
        col2: props.data.data.List10[1],
        col3: props.data.data.List10[2],
        col4: props.data.data.List10[3],
        col5: props.data.data.List10[4],
        col6: props.data.data.List10[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List8[6]} alt="avatar8" />,
          props.data.data.List8[0],
        ],
        col2: props.data.data.List8[1],
        col3: props.data.data.List8[2],
        col4: props.data.data.List8[3],
        col5: props.data.data.List8[4],
        col6: props.data.data.List8[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List9[6]} alt="avatar9" />,
          props.data.data.List9[0],
        ],
        col2: props.data.data.List9[1],
        col3: props.data.data.List9[2],
        col4: props.data.data.List9[3],
        col5: props.data.data.List9[4],
        col6: props.data.data.List9[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
      {
        col1: [
          <img src={props.data.data.List10[6]} alt="avatar10" />,
          props.data.data.List10[0],
        ],
        col2: props.data.data.List10[1],
        col3: props.data.data.List10[2],
        col4: props.data.data.List10[3],
        col5: props.data.data.List10[4],
        col6: props.data.data.List10[5],
        col7: [
          <img src={PenVector} alt="Pen Vector" />,
          <img
            src={DeleteVector}
            alt="Delete Vector"
            onClick={() => setModalIsOpen(true)}
          />,
        ],
      },
    ],
    [props.data.data]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    state,
    canNextPage,
    gotoPage,
    prepareRow,
  } = useTable({ columns: columns, data }, usePagination);

  const buttons = [
    {
      func: () => previousPage(),
      disabled: !canPreviousPage,
      number: "<",
    },
    {
      func: () => gotoPage(0),
      disabled: "",
      number: 1,
    },
    {
      func: () => gotoPage(1),
      disabled: "",
      number: 2,
    },
    {
      func: () => gotoPage(2),
      disabled: "",
      number: 3,
    },
    {
      func: () => nextPage(),
      disabled: !canNextPage,
      number: ">",
    },
  ];

  return (
    <div className="table-wrapper">
      <div className="table">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, key) => (
              <tr key={key} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, key) => (
                  <th key={key} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, key) => {
              prepareRow(row);
              return (
                <tr key={key} {...row.getRowProps()}>
                  {row.cells.map((cell, key) => {
                    return (
                      <td key={key} {...cell.getCellProps()}>
                        <span className="image-name">
                          {cell.render("Cell")}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="table-buttons">
          {buttons.map((item, key) => (
            <button
              onClick={item.func}
              key={key}
              disabled={item.disabled}
              style={
                state.pageIndex === item.number - 1
                  ? { color: "#ffffff", backgroundColor: "#336cfb" }
                  : {}
              }
            >
              {item.number}
            </button>
          ))}
        </div>
      </div>
      <ModalButtons ModalIsOpen={ModalIsOpen} setModal={setModal} />
    </div>
  );
};

export default BigTable;
