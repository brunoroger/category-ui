import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import Category from '../Category'

function Main() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Category</Navbar.Brand>
      </Navbar>
      <br/>
      <Container>
        <Category></Category>
      </Container>
    </div>
  );
}

export default Main;
