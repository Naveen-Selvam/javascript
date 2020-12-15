import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import TextError from "./TextError";

function Login(props) {
  const [status, setStatus] = useState(false);
  const initialValues = {
    email: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email Format").required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const details = response.data;
        const result = details.find((ele) => {
          return ele.email === values.email;
        });
        if (result) {
          props.history.push("/login/dashboard");
          setStatus(false);
        } else {
          setStatus(true);
        }
      })
      .catch((err) => {
        alert(err.message);
      });

    onSubmitProps.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <div>
          <Form>
            <label>Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component={TextError} />
          </Form>

          {status && <p className="error">Invalid Email-ID</p>}
        </div>
      </Formik>
    </div>
  );
}

export default Login;
