import React,{useState,useEffect}  from 'react';
import '../App.css';
import {Nav, Container} from 'react-bootstrap';

function Navig2(props) {
  console.log(props);
  return (
    <div>
<Container>
    <Nav fill variant="tabs" defaultActiveKey="#">
    <Nav.Item>
        <Nav.Link href="#">Tabulated View</Nav.Link>
    </Nav.Item>
    <Nav.Item>

        <Nav.Link href={"/graphview/"+props.data.ur}>Graph View</Nav.Link>
    </Nav.Item>
    </Nav>
</Container>
    </div>
  );
}

export default Navig2;