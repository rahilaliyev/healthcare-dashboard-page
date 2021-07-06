import React from "react";
import Modal from "react-modal";
import FormValidation from "./FormValidation";
import "./Modal.scss";

Modal.setAppElement("#root");
const ModalButtonAdd = (props) => {
  let { ModalOpenAdd, setModalOpenAddFunc } = props;

  return (
    <div>
      <Modal
        isOpen={ModalOpenAdd}
        onRequestClose={setModalOpenAddFunc}
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
          <FormValidation setModalOpenAddFunc={setModalOpenAddFunc}/>
         
        </div>
      </Modal>
    </div>
  );
};

export default ModalButtonAdd;
