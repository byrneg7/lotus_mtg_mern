import React from 'react';
import { Navbar, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CardNameInput from "./CardNameInput";

const MobileNav = ({auth}) => {
  const renderMenu = () => {
    if (auth) {
      return (
        <div className="col mt-2">
          <Row className="mb-2">
            <Link to="/decks">Decks</Link>
          </Row>
          <Row className="mb-2">
            <Link to="/account">Profile</Link>
          </Row>
          <Row className="mb-2">
            <a href="/api/logout">Sign Out</a>
          </Row>
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
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {renderLinks()}
          {renderMenu()}
          <CardNameInput/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

const mapStateToProps = state => {
  return {auth: state.auth}
};

export default connect(mapStateToProps, null)(MobileNav)
