import React from "react";
import logo from "../../assets/logo.png";
import { Form, Formik } from "formik";

export default function SignUp() {
  return (
    <div className="">
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
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
                        initialValues={{ name: "", email: "", password: "" }}
                      >
                        {({ values, setFieldValue, handleChange }) => (
                          <Form>
                            <div className="form-outline mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Enter Your Name"
                              />
                            </div>

                            <div className="form-outline mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                placeholder="Enter Your Email"
                              />
                            </div>

                            <div className="form-outline mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                placeholder="Enter Password"
                              />
                            </div>

                            <div className="form-outline mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                                placeholder="Repeat your password"
                              />
                            </div>

                            <div className="form-check mb-4">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="form2Example3"
                              >
                                I agree to all statements in{" "}
                                <a href="#!">Terms of service</a>
                              </label>
                            </div>

                            <div className="d-flex justify-content-center mb-4">
                              <button
                                type="button"
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
                        src={logo}
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
