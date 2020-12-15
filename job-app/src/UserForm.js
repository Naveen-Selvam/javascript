import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import axios from "axios";
import "./App.css";
import * as yup from "yup";

const UserForm = (props) => {
  const title = [
    "Front-End Developer",
    "Node.js Developer",
    "MEAN Stack Developer",
    "FULL Stack Developer",
  ];

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    experience: "",
    skills: "",
  };
  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email Format").required("Required"),
    phone: yup.number().required("Required"),
    jobTitle: yup.string().required("select"),
    experience: yup.string().required("Required"),
    skills: yup.string().required("Enter your skills"),
  });

  const onSubmit = (values, onSubmitProps) => {
    axios.post(
      "http://dct-application-form.herokuapp.com/users/application-form",
      values
    );
    props.history.push("/submit");
    onSubmitProps.resetForm();
  };

  return (
    <div>
      <Link to="/login">Login</Link>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div>
          <h1>Apply For Job</h1>

          <Form>
            <div className="form-control">
              <label>Full Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <label>Email address</label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>

            <div className="form-control">
              <label>Contact Number</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component={TextError} />
            </div>

            <div className="form-control" className="select">
              <label>Job Title</label>
              <Field name="jobTitle" as="select">
                <option value="">--select--</option>
                {title.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </Field>
              <ErrorMessage name="jobTitle" component={TextError} />
            </div>

            <div className="form-control">
              <label>Experience</label>
              <Field
                type="text"
                name="experience"
                placeholder="(2 yrs , 3 months)"
              />
              <ErrorMessage name="experience" component={TextError} />
            </div>

            <div className="form-control">
              <label>Technical Skills</label>
              <Field
                as="textarea"
                name="skills"
                placeholder="Technical Skills"
              />
              <ErrorMessage name="skills" component={TextError} />
            </div>

            <Field type="submit" name="submit" value="Apply" />
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default UserForm;
