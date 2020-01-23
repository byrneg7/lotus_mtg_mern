import React from 'react';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return(
    <Navbar bg="light" expand="lg" className="navbar-shadow">
      <Link to="/">
        <Navbar.Brand>Lotus MTG</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/auth/google">Sign In</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Account</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default MobileNav;