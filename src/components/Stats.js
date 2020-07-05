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
        <b>Video Duration : {props.data.duration}</b>
        <br />
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-4 cont">
        <b>People's Appeared : {props.data.people}</b>
        <br />
        </div>
        </div>
        <br />
        <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-4 cont">
        <b>Faces Detected : {props.data.faces}</b>
        <br />
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-4 cont">
        <b>Maximum Association :</b>
        <br />
        </div>
        </div>
        <br />
            </div>
    </Container>
  );
}

export default Stats;