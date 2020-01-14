import React from 'react';
import {Nav, Container} from 'react-bootstrap';

function Navig1() {
  return (
    <div>
        <Container>
      <Nav fill variant="tabs" fixed="top" defaultActiveKey="#">
  <Nav.Item>
    <Nav.Link href="#">Most Associated</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Least Associated</Nav.Link>
  </Nav.Item>
</Nav>
</Container>
    </div>
  );
}

export default Navig1;