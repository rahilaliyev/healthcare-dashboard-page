import React from "react";
import Modal from "react-modal";
import "./Modal.scss";

Modal.setAppElement("#root");
const ModalButtonTableDelete = (props) => {
  let {
    ModalOpenTableDelete,
    setModalTableFuncDelete,
    ModalOpenTableEdit,
    setModalTableFuncEdit,
    userDelete,
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
            <button onClick={userDelete}>Yes</button>
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
          <form>
            <label htmlFor="Name"> Name and surname</label>
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder=" For example Lesli Alexander"
            />
            <label htmlFor="Email"> Email</label>
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="lesli.alexander@mail.com"
            />
            <label htmlFor="Doctor"> Doctor</label>
            <input
              type="text"
              name="Doctor"
              id="Doctor"
              placeholder="Dr. Esther Howard"
            />
            <label htmlFor="VisitTime"> Visit Time</label>
            <input
              type="text"
              name="VisitTime"
              placeholder="12:00-12:45pm"
              id="VisitTime"
            />
            <label htmlFor="Conditions"> Conditions</label>
            <input
              type="text"
              name="Conditions"
              placeholder="Depression"
              id="Conditions"
            />
            <div className="modal-buttons">
              <button onClick={setModalTableFuncEdit}>Cancel</button>
              <button>Save</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalButtonTableDelete;
