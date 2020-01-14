import React from 'react';
import '../App.css';
import {Container ,Row,Col,Image} from 'react-bootstrap';

function SingleView(props) {
  console.log(props);
  return (
    props.loadings ? <div>loading</div> : 
    <div>
      <br /><br />
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
       <Image src={"http://10.114.40.100:5000/"+ "static/images/"+ props.data1.img} width="100" height="70" roundedCircle />
       </Col>
       </Row>
       <br />
       <Row>
        <Col md={1}></Col>
        <Col>
       <a href={'/appearance/'+props.data1.ur+'/'+props.data1.cid} class="btn btn-success">View Appearances</a>
       <br /><br />
       <a href={'/dashboard/'+props.data1.ur} class="btn btn-danger center-block">Back to Dashboard</a>
       </Col>
       </Row>
    </div>
  );
}

export default SingleView;