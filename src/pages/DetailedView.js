import React,{ Component }  from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col,ButtonToolbar,Button} from 'react-bootstrap';
import '../App.css';
import { render } from '@testing-library/react';
import Detailed from '../components/Detailed';
import Navigbar from '../components/Navigbar';
import SingleView from '../components/SingleView';


export default class DetailedView extends Component {
  constructor(){
    super();
    this.state = {
      loadings: true,
      table:[],
    }
  }
  componentDidMount(){
    console.log(this.props.match.params.id);
    console.log(this.props.match.params.cid);
    fetch('http://10.114.40.100:5000/apr_data?ids='+this.props.match.params.id+'&cid='+this.props.match.params.cid).then(response =>
    response.json().then(data=>{
    this.table=data.data
    this.setState({table: data})
    this.setState({loadings: false})
    console.log(this.table);
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
        <Col md={1}> </Col>
            <Col md={8}>
                <Detailed  data={this.state.table.data} loadings={this.state.loadings} />
            <br />
            </Col>
            <Col md={3}>
                <SingleView data1={this.state.table.opt} loadings={this.state.loadings} />
            </Col>

        </Row>
    </div>
  );
}

}