import React from 'react';
import '../App.css';
import {Container ,Row,Col,Image} from 'react-bootstrap';

function Tabular(props) {
  return (
    props.loadings ? <div>loading</div> :
    <div>
    <Row>
{props.data.map(item => (
    <Col md={4}>
    <div >
    <br />
    <Image  src={"http://35.225.193.235:2000/"+ "static/images/"+ item.img} width="100" height="70" roundedCircle />
    <br />
    Appearances: {item.appearances}
    <br />
    <a href={'/detailedview/'+item.id+'/'+item.cid} class="btn btn-primary center-block">View Relation</a>
    <br />
    </div>
    </Col>
   
  ))}
  </Row>
  </div>
  );

}

export default Tabular;