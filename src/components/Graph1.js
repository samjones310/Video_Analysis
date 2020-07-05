import React from 'react';
import '../App.css';
import { Graph } from "react-d3-graph";

function Graphic1(props) {
    console.log(props);
    const data = 
    props.data
    ;
    // the graph configuration, you only need to pass down properties
    // that you want to override, otherwise default ones will be used
    const myConfig = {
            "automaticRearrangeAfterDropNode": false,
            "collapsible": false,
            "directed": false,
            "focusAnimationDuration": 0.75,
            "focusZoom":1.7,
            "height": 500,
            "highlightDegree": 1,
            "highlightOpacity": 0.2,
            "linkHighlightBehavior": true,
            "maxZoom": 2.5,
            "minZoom": 0.7,
            "nodeHighlightBehavior": true,
            "panAndZoom": true,
            "staticGraph": false,
            "staticGraphWithDragAndDrop": false,
            "width": 600,
            "d3": {
              "alphaTarget": 0.05,
              "gravity": -100,
              "linkLength": 200,
              "linkStrength": 1
            },
            "node": {
              "color": "#16a085",
              "fontColor": "black",
              "fontSize": 8,
              "fontWeight": "normal",
              "highlightColor": "red",
              "highlightFontSize": 14,
              "highlightFontWeight": "bold",
              "highlightStrokeColor": "SAME",
              "highlightStrokeWidth": 1.5,
              "labelProperty": "name",
              "mouseCursor": "pointer",
              "opacity": 1,
              "renderLabel": true,
              "strokeColor": "none",
              "svg": "",
              "symbolType": "circle",

            },
            "link": {
              "color": "#d3d3d3",
              "fontColor": "black",
              "fontSize": 8,
              "fontWeight": "normal",
              "highlightColor": "blue",
              "highlightFontSize": 8,
              "highlightFontWeight": "normal",
              "labelProperty": "label",
              "mouseCursor": "pointer",
              "opacity": 1,
              "renderLabel": true,
              "semanticStrokeWidth": true,
              "markerHeight": 6,
              "markerWidth": 6,
            }
          
    };
     
    // graph event callbacks
    const onClickGraph = function() {
    };
     
    const onClickNode = function(nodeId) {
    };
     
    const onDoubleClickNode = function(nodeId) {
    };
     
    const onRightClickNode = function(event, nodeId) {
    };
 
    const onMouseOverNode = function(nodeId) {
    };
     
    const onMouseOutNode = function(nodeId) {
    };
     
    const onClickLink = function(source, target) {
    };
     
    const onRightClickLink = function(event, source, target) {
    };

    const onMouseOverLink = function(source, target) {
    };
     
    const onMouseOutLink = function(source, target) {
    };
     
    const onNodePositionChange = function(nodeId, x, y) {
    };

  return (
    props.loadings ? <div>loading</div> :
    <div>
        <br /> <br />
    <Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={data}
    config={myConfig}
    onClickNode={onClickNode}
    onRightClickNode={onRightClickNode}
    onClickGraph={onClickGraph}
    onClickLink={onClickLink}
    onRightClickLink={onRightClickLink}
    onMouseOverNode={onMouseOverNode}
    onMouseOutNode={onMouseOutNode}
    onMouseOverLink={onMouseOverLink}
    onMouseOutLink={onMouseOutLink}
    onNodePositionChange={onNodePositionChange}
/>;
    </div>
  );
}

export default Graphic1;