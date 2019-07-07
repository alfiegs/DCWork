import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

export default () => {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/allmovies">All Movies</Nav.Link>
      <Nav.Link href="/movielist">Movie List</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </>

    )
}
