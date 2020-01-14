import React,{ Component }  from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col,ButtonToolbar,Button} from 'react-bootstrap';
import '../App.css';
import { render } from '@testing-library/react';
import Tabular from '../components/Tabular'
import Navigbar from '../components/Navigbar';
import UploadVideo  from '../components/Upload';
import Stats from '../components/Stats';
import Association from '../components/Association';
import Navig1 from '../components/Navig1';
import Navig2 from '../components/Navig2';
import Navig3 from '../components/Navig3';


export default class DashboardView extends Component {
  constructor(){
    super();
    this.state = {
      loadings: true,
      table:[],
      stats: [],
      apr: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:2000/table_data?ids='+this.props.match.params.id).then(response =>
    response.json().then(data=>{
    this.setState({table: data.items})
    this.setState({loadings: false})
    this.setState({stats: data.stat})
    this.setState({apr: data.apr})
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
            <Stats data={this.state.stats} />
            <br />
            <Navig1 />
            <br />
            <Association apr={this.state.apr}  loadings={this.state.loadings}/>
            <br />
            </Col>
            <Col md={6}>
                <Row>
                <Col md={6}><Navig2  data={this.state.stats} /></Col>
                <Col md={1}></Col>
                <Col md={5}><Navig3 /></Col>
                </Row>
                <Tabular data={this.state.table} loadings={this.state.loadings}  />
            </Col>

        </Row>
    </div>
  );
}

}