import React from "react";
import logo from "../../assets/logo.png";
import NavBar from "../landing_page/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import axios from "axios";

export default function LogIn() {
  const navigate = useNavigate();
  //Get API method Method here
  const getDataFromAPI = async (values) => {
    try {
      const res = await axios.put(
          "http://localhost:5000/users", {
              email: values.email,
              password: values.password,
              confirmPassword:values.confirmPassword
        }
      );
        alert(res.data);
        if (res.data === "Password is Updated") {
            navigate("/signinpage");
            return;
        }
        
    } catch (error) {
      alert(error.message);
    }
  };
  return (
      <div style={{ backgroundColor: "#eee" }} className="vh-100">
      {<NavBar/>}
      <section class="vh-60 vw-60">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <Formik
                initialValues={{ email: "", password: "",confirmPassword:"" }}
                onSubmit={(values) => getDataFromAPI(values)}
              >
                {({ values, handleChange }) => (
                  <Form
                    style={{
                      backgroundColor: "white",
                      height: "100vh",
                      padding: "60px",
                    }}
                  >
                    <div class="d-flex flex-row align-items-center justify-content-center ">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Update Password
                      </p>
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        class="form-control form-control-lg"
                        name="email"
                        placeholder="Enter a valid email address"
                        onChange={handleChange}
                      />
                    </div>

                    <div class="form-outline mb-3">
                      <label class="form-label" for="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        name="password"
                        class="form-control form-control-lg"
                        placeholder="Enter password"
                        onChange={handleChange}
                      />
                    </div>
                    <div class="form-outline mb-3">
                      <label class="form-label" for="form3Example4">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        name="confirmPassword"
                        class="form-control form-control-lg"
                        placeholder="Enter confirm password"
                        onChange={handleChange}
                      />
                    </div>

                    <div class="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg "
                        style={{
                          paddingLeft: "3.5rem",
                          paddingRight: "3.5rem",
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
