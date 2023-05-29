import React from "react";
import logo from "../../assets/logo.png";
import { Form, Formik } from "formik";
import axios from "axios";

export default function SignUp() {
  const postDataToAPI = async (values) => {
    try {
      const res = await axios.post("http://localhost:5000/users", {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });
      alert(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ backgroundColor: "#4b86b4" }}>
      <section className="vh-100" style={{ backgroundColor: "#fad9c1" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <Formik
                        initialValues={{
                          name: "",
                          email: "",
                          password: "",
                          confirmPassword: "",
                        }}
                        onSubmit={(values) => {
                          let errors = {};
                          if (!values.name) {
                            errors.name = "Name Field is Required";
                          }
                          if (!values.email) {
                            errors.email = "Email Field is Required";
                          }
                          if (!values.password) {
                            errors.password = "Password Field is Required";
                          }
                          if (!values.confirmPassword) {
                            errors.confirmPassword =
                              "Password Field is Required";
                            alert(errors.confirmPassword);
                          }
                          if (values.password !== values.confirmPassword) {
                            errors.confirmPassword =
                              "Password Fields Should be same";
                          }
                          if (Object.keys(errors).length === 0) {
                            postDataToAPI(values);
                          }
                        }}
                      >
                        {({ values, setFieldValue, handleChange, errors }) => (
                          <Form>
                            <div className="form-outline mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <label class="form-label" for="form3Example4">
                                Enter Name
                              </label>
                              <input
                                style={{ padding: "10px" }}
                                type="text"
                                id="form3Example1c"
                                name="name"
                                className="form-control"
                                placeholder="Enter Your Name"
                                onChange={handleChange}
                              />
                            </div>

                            <div className="form-outline mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <label class="form-label" for="form3Example4">
                                Enter Email
                              </label>
                              <input
                                style={{ padding: "10px " }}
                                type="email"
                                id="form3Example3c"
                                name="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                                onChange={handleChange}
                              />
                            </div>

                            <div className="form-outline mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <label class="form-label" for="form3Example4">
                                Enter Password
                              </label>
                              <input
                                style={{ padding: "10px" }}
                                type="password"
                                id="form3Example4c"
                                name="password"
                                className="form-control"
                                placeholder="Enter Password"
                                onChange={handleChange}
                              />
                            </div>

                            <div className="form-outline mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <label class="form-label" for="form3Example4">
                                Confirm Password
                              </label>
                              <input
                                style={{ padding: "10px" }}
                                type="password"
                                id="form3Example4cd"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Repeat your password"
                                onChange={handleChange}
                              />
                            </div>

                            <div className="d-flex justify-content-center mb-4">
                              <button
                                style={{ padding: "10px 50px" }}
                                type="submit"
                                className="btn btn-primary btn-lg"
                              >
                                Register
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
