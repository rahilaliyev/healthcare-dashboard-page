import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ModalButtonTable = (props) => {
  let { ModalOpenTable, setModalTableFunc } = props;

  return (
    <div>
      <Modal
        isOpen={ModalOpenTable}
        onRequestClose={setModalTableFunc}
        style={{
          overlay: {
            width: "100%",
          },
          content: {
            width: "30%",
            left: "35%",
            top: "30%",
            height: "20%",

            border: "none",
            boxShadow: "0px 0px 8px rgba(16, 30, 115, 0.12)",
          },
        }}
      >
        <div className="modal">
          <h3>Are you sure you want to delete?</h3>
          <div className="modal-buttons">
            <button onClick={setModalTableFunc}>No</button>
            <button>Yes</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalButtonTable;
