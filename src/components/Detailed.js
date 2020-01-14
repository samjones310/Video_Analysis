import React from 'react';
import '../App.css';
import {Container ,Row,Col,Image} from 'react-bootstrap';

function Detailed(props) {
  console.log(props);
return (
  props.loadings ? <div>loading</div> :
  <div>
  <Row>
{props.data.map(item => (
  <Col md={4}>
  <div >
  <br />
  <Image  src={"http://localhost:2000/"+ "static/images/"+ item.img} width="100" height="70" roundedCircle />
  <br />
  Confidence: {item.confidence}
  <br />
  <a href={'/detailedview/'+item.key+'/'+item.person} class="btn btn-primary center-block">View Relation</a>
  <br />
  </div>
  </Col>
 
))}
</Row>
</div>
);

}

export default Detailed;