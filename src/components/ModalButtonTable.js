import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ModalButtonTable = (props) => {
  let {
    ModalOpenTableDelete,
    setModalTableFuncDelete,
    ModalOpenTableEdit,
    setModalTableFuncEdit,
  } = props;

  return (
    <div>
      <Modal
        isOpen={ModalOpenTableDelete}
        onRequestClose={setModalTableFuncDelete}
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
            <button onClick={setModalTableFuncDelete}>No</button>
            <button>Yes</button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={ModalOpenTableEdit}
        onRequestClose={setModalTableFuncEdit}
        style={{
          overlay: {
            width: "100%",
          },
          content: {
            width: "70%",
            left: "15%",
            top: "10%",
            height: "70%",

            border: "none",
            boxShadow: "0px 0px 8px rgba(16, 30, 115, 0.12)",
          },
        }}
      >
        <div className="modal">
          <div className="modal-buttons">
            <button onClick={setModalTableFuncEdit}>Cancel</button>
            <button>Save</button>
          </div>
          <form>
            <label>
              Name: <input type="text" name="name" />
            </label>

            <label>
              Email: <input type="email" name="email" />
            </label>

            <label>
              Date: <input type="date" name="date" />
            </label>

            <label>
              Doctor: <input type="text" name="doctor" />
            </label>

            <label>
              Visit Time: <input type="text" name="visitTime" />
            </label>

            <label>
              Conditions: <input type="text" name="Conditions" />
            </label>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalButtonTable;
