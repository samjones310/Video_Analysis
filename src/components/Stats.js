import React,{useState,useEffect} from 'react';
import '../App.css';
import {Container ,Row,Col} from 'react-bootstrap';

function Stats(props) {
  console.log(props);
  return (
<Container>
        <div class="cont1">
        <br />
        <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-4 cont">
        Video Duration: {props.data.duration}
        <br />
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-4 cont">
        People Appeared: {props.data.people}
        <br />
        </div>
        </div>
        <br />
        <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-4 cont">
        Faces Detected: {props.data.faces}
        <br />
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-4 cont">
        Maximum Association:
        <br />
        </div>
        </div>
        <br />
            </div>
    </Container>
  );
}

export default Stats;