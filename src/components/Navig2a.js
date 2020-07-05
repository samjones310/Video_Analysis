import React,{useState,useEffect}  from 'react';
import '../App.css';
import {Nav, Container} from 'react-bootstrap';
import { precisionPrefix } from 'd3';

function Navig2a(props) {
  console.log(props);
  return (
    props.loadings ? <div>loading</div> : 
    <div>
<Container>
    <Nav fill variant="tabs" defaultActiveKey="#">
    <Nav.Item>
        <Nav.Link href={"/dashboard/"}>Tabulated View</Nav.Link>
    </Nav.Item>
    <Nav.Item>
   
        <Nav.Link href={"/graphview/"}>Graph View</Nav.Link>
    </Nav.Item>
    </Nav>
</Container>

<br />
<Container>
   
</Container>
    </div>
  );
}

export default Navig2a;