import React from "react";
import logo from "../../assets/logo.png";
import login from "../../assets/login.png";
import signup from "../../assets/signup.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "white" }}>
      {/* <Container> */}
      <Navbar.Brand href="#home">
        <img src={logo} height={70} alt="" />
        LMS PORTAL
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to={"/"} style={{textDecoration:"none",padding:"7px",color:"#4C4C4C"}}>Home</Link>
          <Link to={"/aboutus"} style={{textDecoration:"none",padding:"7px",color:"#4C4C4C"}}>About</Link>
          
          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Technical</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Non-Technical
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <button class="text-right btn btn-warning " >
        <Link to="/signinpage" style={{ textDecoration:"none" ,color:"white"}}><img
        src={login}
            height={20}
        style={{ marginRight: "5px", marginBottom: "5px",textDecoration:"none" }}
        alt=""
      />
      Trainee Login</Link>
          
        </button>
        <button class="text-right btn btn-primary mx-4 pe-3 ps-3">
          <Link to="/signuppage" style={{ textDecoration:"none" ,color:"white"}}><img
          src={signup}
          height={20}
          style={{ marginRight: "5px", marginBottom: "5px" }}
          alt=""
        />
        Signup</Link>
          
        </button>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}
