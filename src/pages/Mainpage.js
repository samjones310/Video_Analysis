import React,{ Component } from 'react';
import Navigbar from '../components/Navigbar';
import UploadVideo  from '../components/Upload';
import VideoPlay from '../components/VideoPlay';
import {Container,Row,Col} from 'react-bootstrap';
import '../App.css';

export default class MainPage extends Component{
  render(){
  return (
  <div className="container">
    <Row>
    <Navigbar />
    </Row>
      <br /> <br />  <br />  <br /> 
    <Row>
        <Col md={7}><UploadVideo /></Col>
        <Col md={5}><VideoPlay /></Col>
    </Row>
</div>
  )
}
}
