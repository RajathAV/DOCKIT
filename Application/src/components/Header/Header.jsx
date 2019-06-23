import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from 'prop-types';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styles = {
      margin: '20px',
    };

    const { testFunc } = this.props;
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand className="navbar-brand">
          <h3 id="title">Doc-kit</h3>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-between">
          <Nav fill>
            <LinkContainer to="/profile" style={styles}>
              <NavItem className="navitem">About Me</NavItem>
            </LinkContainer>
            <LinkContainer to="/shared" style={styles}>
              <NavItem className="navitem">Shared View</NavItem>
            </LinkContainer>
            <LinkContainer to="/open" style={styles}>
              <NavItem className="navitem">Open Profile</NavItem>
            </LinkContainer>
          </Nav>
          <Nav>
            <Form inline>
              <FormControl type="text" placeholder="Enter Blockstack ID..." className="mr-sm-2" />
              <Button variant="outline-success" onClick={testFunc}>Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
