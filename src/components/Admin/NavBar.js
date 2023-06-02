import React from "react";
import logo from "../../assets/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link,useNavigate } from "react-router-dom";
import SignUp from "../SignupPage/SignUp";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "white" }}>
        {/* <Container> */}
        <Navbar.Brand href="#home">
          <img src={logo} height={70} alt="" />
          ADMIN PORTAL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to={"/adminhome"}
              style={{
                textDecoration: "none",
                padding: "7px",
                color: "#4C4C4C",
              }}
            >
              Home
            </Link>
            <Link
              to={"/alluser"}
              style={{
                textDecoration: "none",
                padding: "7px",
                color: "#4C4C4C",
              }}
            >
              Users
            </Link>
            <Link
              to={"/finduser"}
              style={{
                textDecoration: "none",
                padding: "7px",
                color: "#4C4C4C",
              }}
            >
              Find User
            </Link>
            <Link
              to={"/removeuser"}
              style={{
                textDecoration: "none",
                padding: "7px",
                color: "#4C4C4C",
              }}
            >
              Remove User
            </Link>
            
          </Nav>
          <button class="text-right btn btn-primary mx-4 pe-3 ps-3">
          <Link to="/signuppage" style={{ textDecoration:"none" ,color:"white"}}><img
          src={SignUp}
          height={20}
          style={{ marginRight: "5px", marginBottom: "5px" }}
          alt=""
        />
        Logout</Link>
          
        </button>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}
