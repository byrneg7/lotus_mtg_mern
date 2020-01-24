import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CardNameInput from "./CardNameInput";

const MobileNav = ({auth}) => {
  const renderMenu = () => {
    if (auth) {
      return (
        <div className="mt-2">
          <Link to="/account">Profile</Link>
          <Nav.Link href="/api/logout">Sign Out</Nav.Link>
        </div>
      )
    }
  };

  const renderLinks = () => {
    if (!auth) {
      return (
        <Nav.Link href="/auth/google">Sign In</Nav.Link>
      )
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar-shadow">
      <Link to="/">
        <Navbar.Brand>Lotus MTG</Navbar.Brand>
      </Link>
      <CardNameInput/>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {renderLinks()}
          {renderMenu()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

const mapStateToProps = state => {
  return {auth: state.auth}
};

export default connect(mapStateToProps, null)(MobileNav)
