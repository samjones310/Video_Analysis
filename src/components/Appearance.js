import React from 'react';
import '../App.css';
import {Container ,Row,Col,Image} from 'react-bootstrap';


function Appearance(props) {
return (
  props.loadings ? <div>loading</div> :
  <div>
  <Row>
{props.data.map(item => (
  <Col md={6}>
  <div >
  <br />
  <Image  src={"http://localhost:2000/"+ "static/frames/"+ item.img} width="350" height="200"  />
  <br />
  Frame Name: {item.frame}
  <br />
  </div>
  </Col>
 
))}
</Row>
<br /><br />
<Row>
<Col md={4}></Col>
<Col md={4}>
  <a href={'/detailedview/'+props.data[0].id+'/'+props.data[0].cid} class="btn btn-primary center-block">Back to Association View</a>
</Col>

</Row>
</div>
);

}

export default Appearance;