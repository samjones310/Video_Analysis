import React from 'react';
import {Container ,Row,Col,Image} from 'react-bootstrap';
import arrow from '../arrow.png';
import profile from '../profile.png';

function Association(props) {
  console.log(props);
  return (
    props.loadings ? <div>loading</div> :
    <div>
<Container>
{props.apr.map(item => (
  <Row>
  <Col  md={2}>
      <Image src={"http://localhost:2000/"+ "static/images/"+ item.img_1} width="100" height="50" roundedCircle />
    </Col>
    <Col  md={1}>
      <Image src={arrow} width="50" height="50" roundedCircle />
    </Col>
    <Col md={2}>
      <Image src={"http://localhost:2000/"+ "static/images/"+ item.img_2} width="100" height="50" roundedCircle />
    </Col>
    <Col md={7}>
    <div class="">
      <br />
      <h4>
    Confidence of <b>{item.conf}</b>  Out of <b> {item.count}</b> Appearances.
    </h4>
        <br />  
        </div>
        <br /><br />
    </Col>
  </Row>

))}
</Container>
<br />

    </div>
  );
}

export default Association;