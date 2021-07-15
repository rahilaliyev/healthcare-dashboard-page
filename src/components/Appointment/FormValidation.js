import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import axios from "axios";
import { changeData } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import TimePicker from "./TimePicker";
import moment from "moment";
import Snackbar from "@material-ui/core/Snackbar";

const FormValidation = (props) => {
  const dispatch = useDispatch();
  const value1 = useRef("");
  const value2 = useRef("");

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          StartVisitTime: value1.current.value,
          EndVisitTime: value2.current.value,
          Doctor: "",
          Conditions: "",
        }}
        validationSchema={Yup.object({
          Name: Yup.string()
            .min(3, "Too Short!")
            .max(20, "Too Long!")
            .required("Name can not be empty"),
          Email: Yup.string()
            .email("Invalid email")
            .required("Email can not be empty"),
          Doctor: Yup.string()
            .min(3, "Too Short!")
            .max(20, "Too Long!")
            .required("Add doctor's name"),
          Conditions: Yup.string()
            .min(3, "Too Short!")
            .max(20, "Too Long!")
            .required("This input can not be empty"),
        })}
        onSubmit={(values) => {
          handleClick();
          axios
            .post("https://desolate-hamlet-85078.herokuapp.com/users", {
              Name: values.Name,
              Email: values.Email,
              VisitTime:
                moment(value1.current.value, ["HH.mm"]).format("hh:mm") +
                "-" +
                moment(value2.current.value, ["HH.mm"]).format("hh:mm a"),
              Doctor: values.Doctor,
              Conditions: values.Conditions,
              Date: Date.now(),
            })
            .then((res) => dispatch(changeData(res.data)))
            .catch((err) => console.log(err));

          setTimeout(() => {
            props.setModalOpenAddFunc();
          }, 4000);
        }}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <label htmlFor="Name"> Name and surname</label>
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder=" For example Lesli Alexander"
              value={values.Name}
              onChange={handleChange}
            />
            {errors.Name && touched.Name ? (
              <div className="input-errors">{errors.Name}</div>
            ) : null}

            <label htmlFor="Email"> Email</label>
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="lesli.alexander@mail.com"
              value={values.Email}
              onChange={handleChange}
            />
            {errors.Email && touched.Email ? (
              <div className="input-errors">{errors.Email}</div>
            ) : null}

            <label htmlFor="Doctor"> Doctor</label>
            <input
              type="text"
              name="Doctor"
              id="Doctor"
              placeholder="Dr. Esther Howard"
              value={values.Doctor}
              onChange={handleChange}
            />
            {errors.Doctor && touched.Doctor ? (
              <div className="input-errors">{errors.Doctor}</div>
            ) : null}

            <label htmlFor="VisitTime"> Visit Time</label>

            <TimePicker StartVisitTime={value1} EndVisitTime={value2} />

            <label htmlFor="Conditions"> Conditions</label>
            <input
              type="text"
              name="Conditions"
              placeholder="Depression"
              id="Conditions"
              value={values.Conditions}
              onChange={handleChange}
            />
            {errors.Conditions && touched.Conditions ? (
              <div className="input-errors">{errors.Conditions}</div>
            ) : null}

            <div className="modal-buttons">
              <button onClick={props.setModalOpenAddFunc}>Cancel</button>
              <button type="submit">Add</button>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Patient's informastion was added"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormValidation;
