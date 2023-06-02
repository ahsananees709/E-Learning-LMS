import React, { useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import NavBar from "./NavBar";
export default function () {
  const [myUser, setUser] = useState();

  const removeUser = async (values) => {
    const res = await axios.delete(
      `http://localhost:5000/users/${values.email}`
    );
    setUser(res.data);
    alert("User is Removed");
  };

  return (
    <div style={{ backgroundColor: "#4b86b4" }}>
      {<NavBar />}
      <section className="vh-100" style={{ backgroundColor: "#fad9c1" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Remove User
                      </p>
                      <Formik
                        initialValues={{
                          email: "",
                        }}
                        onSubmit={(values) => {
                          removeUser(values);
                        }}
                      >
                        {({ values, setFieldValue, handleChange, errors }) => (
                          <Form>
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
                            <div className="d-flex justify-content-center mb-4">
                              <button
                                style={{ padding: "10px 50px" }}
                                type="submit"
                                className="btn btn-primary btn-lg"
                              >
                                Find
                              </button>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      {myUser && (
                        <div>
                          <h1 style={{ textAlign: "center",color:"red" }}>Removed User</h1>
                          <h2>Name : {myUser.name}</h2>
                          <h2>Email : {myUser.email}</h2>
                          <h2>Password : {myUser.password}</h2>
                          <h2>Confirm Password : {myUser.confirmPassword}</h2>
                        </div>
                      )}
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
