import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, NavDropdown, FormControl } from 'react-bootstrap'
import _ from 'lodash'
import { connect } from 'react-redux'
import setSearch from '../actions/search'
import { Search } from 'semantic-ui-react'


class Navigation extends Component {

  search = (e, {value}) =>{
    // event.preventDefault();
    debugger 
    // this.setState({
    //   searchTerm:value
    // })
    this.props.setSearch(value)
  }


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
            </Navbar.Collapse>
            <Search onSearchChange={_.debounce(this.search, 500)} showNoResults={false} type="text" placeholder="Search" className="sm" />
        </Navbar>
        </div>
        );
    }
}

const mapStateToProps = state =>{
  // debugger
  // console.log(state)
  return {
  
    // attractions: state.attractions,
    searchTerm: state.search
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    // fetchAttractions: () => dispatch(fetchAttractions()),
    setSearch: (searchTerm) => dispatch(setSearch(searchTerm))
  }
 
 }

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);



{/* <Search onSearchChange={_.debounce(this.search, 500)} showNoResults={false} /> */}