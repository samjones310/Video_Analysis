import React from 'react';
import '../App.css';
import {Nav, Container} from 'react-bootstrap';

function Navig3() {
  return (
    <div>
<Container>
    <Nav fill variant="tabs" defaultActiveKey="#">
    <Nav.Item>
        <Nav.Link href="#">Appearances</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1">Default</Nav.Link>
    </Nav.Item>
    </Nav>
</Container>
    </div>
  );
}

export default Navig3;