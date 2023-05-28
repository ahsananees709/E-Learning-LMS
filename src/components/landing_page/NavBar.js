import React from "react";
import logo from "../../assets/logo.png";
import login from "../../assets/login.png";
import signup from "../../assets/signup.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  return (
    <Navbar  expand="lg" style={{backgroundColor:"white"}}>
      {/* <Container> */}
      <Navbar.Brand href="#home">
        <img src={logo} height={70} alt="" />
        LMS PORTAL
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Technical</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Non-Technical
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>        
        <button  class="text-right btn btn-warning "><img src={login} height={20} style={{marginRight:"5px",marginBottom:"5px"}} alt="" />Trainee Login</button>
        <button class="text-right btn btn-primary mx-4 pe-3 ps-3"><img src={signup} height={20} style={{marginRight:"5px",marginBottom:"5px"}} alt="" />Signup</button>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}
