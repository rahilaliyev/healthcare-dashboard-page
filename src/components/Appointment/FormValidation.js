import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { changeData } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

const FormValidation = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          VisitTime: "",
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
          VisitTime: Yup.string(),
          Doctor: Yup.string()
            .min(3, "Too Short!")
            .max(20, "Too Long!")
            .required("Add doctor's name"),
          Conditions: Yup.string()
            .min(3, "Too Short!")
            .max(20, "Too Long!")
            .required("This input can not be empty"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          axios
            .post("https://desolate-hamlet-85078.herokuapp.com/users", {
              Name: values.Name,
              Email: values.Email,
              VisitTime: values.VisitTime,
              Doctor: values.Doctor,
              Conditions: values.Conditions,
              Date: Date.now(),
            })
            .then((res) => dispatch(changeData(res.data)))
            .catch((err) => console.log(err));
          setTimeout(() => {
            resetForm();
            props.setModalOpenAddFunc();
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleReset,
          handleChange,
          dirty,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
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

            <label htmlFor="Doctor"> Doctor</label>
            <input
              type="text"
              name="Doctor"
              id="Doctor"
              placeholder="Dr. Esther Howard"
              value={values.Doctor}
              onChange={handleChange}
            />

            <label htmlFor="VisitTime"> VisitTime</label>
            <input
              type="text"
              name="VisitTime"
              placeholder="12:00-12:45pm"
              id="VisitTime"
              value={values.VisitTime}
              onChange={handleChange}
            />

            <label htmlFor="Conditions"> Conditions</label>
            <input
              type="text"
              name="Conditions"
              placeholder="Depression"
              id="Conditions"
              value={values.Conditions}
              onChange={handleChange}
            />

            <div className="modal-buttons">
              <button onClick={props.setModalOpenAddFunc}>Cancel</button>
              <button type="submit" disabled={!dirty || isSubmitting}>
                Add
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormValidation;
