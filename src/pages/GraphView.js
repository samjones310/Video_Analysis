import React,{ Component }  from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col,ButtonToolbar,Button} from 'react-bootstrap';
import '../App.css';
import { render } from '@testing-library/react';
import Graphic from '../components/Graph'
import Graphic1 from '../components/Graph1'
import Navigbar from '../components/Navigbar'
import Navig1 from '../components/Navig1';
import Navig2a from '../components/Navig2a';
import UploadVideo from '../components/Upload';
import Association from '../components/Association';
import Stats2 from '../components/Stats2';

export default class GraphView extends Component {
  constructor(){
    super();
    this.state = {
      loadings: true,
      table:[],
    }
  }
  componentDidMount(){
    fetch('http://localhost:5000/graph_data').then(response =>
    response.json().then(data=>{
    this.table=data.data
    this.setState({table: data})
    this.setState({loadings: false})
    })
 ); 

  }
  render(){
  return (
    <div>
        <Row>
          <Navigbar />
        </Row>
    <br /> <br /> 
        <Row>
            <Col md={6}>
            <UploadVideo />
            <br />
            <br />
            </Col>
            <Col md={6}>
            <Row>

                <Col md={6}><Navig2a  data={this.state.stats} /></Col>
                </Row>
                <Row>
                <Graphic1 data={this.state.table.data} loadings={this.state.loadings}  />
                </Row>
            </Col>

        </Row>
    </div>
  );
}
}
