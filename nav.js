import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

const Navigator = (props) => {
  const [search, setsearch] = useState(' ');

  const submit = (e) => {
    setsearch(e.target.value);
  }
  const submitform = (e) => {
    e.preventDefault();
    console.log(props.data.element);
    props.data.searchwith(search);
  }
  return (

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form onClick={submitform} inline>
          <FormControl className="mr-sm-2" onChange={submit} />
          <Button type="submit" variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  );

}

export default Navigator;