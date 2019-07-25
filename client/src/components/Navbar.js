import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, NavDropdown, FormControl } from 'react-bootstrap'


class Navigation extends Component {
    render() {
        return (
        <div>
        <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
           <Navbar.Brand  href="/">Colorado Outdoors</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown  title="More Info" id="basic-nav-dropdown">
                <NavDropdown.Item  href="http://www.recreation.gov">Recreation.gov</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item  href="http://www.nps.gov">National Park Service</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item  href="/about">About this App</NavDropdown.Item>
              </NavDropdown>

             </Nav>
             <Form inline>
               <FormControl type="text" placeholder="Search" className="mr-sm-3" />
               <Button variant="outline-success">Search</Button>
             </Form>
            </Navbar.Collapse>
        </Navbar>
        </div>
        );
    }
}

export default Navigation;



        