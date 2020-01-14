import React,{useState,useEffect} from 'react';
import '../App.css';
import { Graph } from "react-d3-graph";

function Graphic({gdata}) {
    const data= {
        nodes:[{id: "20b83de2-3071-11ea-afae-c0b5d7b115a9_frame_1.jpg"},{id: "20b83de2-3071-11ea-afae-c0b5d7b115a9_frame_2.jpg"}, {id: "1"},{id: "4"},{id: "6"},
         {id: "7"},{id: "20b83de2-3071-11ea-afae-c0b5d7b115a9_frame_3.jpg"},{id: "3"},
         {id: "8"},{id: "20b83de2-3071-11ea-afae-c0b5d7b115a9_frame_4.jpg"},{id: "20b83de2-3071-11ea-afae-c0b5d7b115a9_frame_5.jpg"},{id: "0"},{id: "20b83de2-3071-11ea-afae-c0b5d7b115a9_frame_6.jpg"},{id: "2"},{id: "5"},{id: "20b83de2-3071-11ea-afae-c0b5d7b115a9_frame_7.jpg"}],
        links: [{ source: "1", target: "2" }, { source: "7", target: "8" }],
    };

    // the graph configuration, you only need to pass down properties
    // that you want to override, otherwise default ones will be used
    const myConfig = {
            "automaticRearrangeAfterDropNode": false,
            "collapsible": false,
            "directed": false,
            "focusAnimationDuration": 0.75,
            "focusZoom": 1,
            "height": 400,
            "highlightDegree": 1,
            "highlightOpacity": 0.2,
            "linkHighlightBehavior": true,
            "maxZoom": 6,
            "minZoom": 0.1,
            "nodeHighlightBehavior": true,
            "panAndZoom": false,
            "staticGraph": false,
            "staticGraphWithDragAndDrop": false,
            "width": 800,
            "d3": {
              "alphaTarget": 0.05,
              "gravity": -100,
              "linkLength": 100,
              "linkStrength": 1
            },
            "node": {
              "color": "#d3d3d3",
              "fontColor": "black",
              "fontSize": 12,
              "fontWeight": "normal",
              "highlightColor": "red",
              "highlightFontSize": 12,
              "highlightFontWeight": "bold",
              "highlightStrokeColor": "SAME",
              "highlightStrokeWidth": 1.5,
              "labelProperty": "name",
              "mouseCursor": "pointer",
              "opacity": 1,
              "renderLabel": false,
              "size": 700,
              "strokeColor": "none",
              "strokeWidth": 1.5,
              "svg": "",
              "symbolType": "circle"
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
              "renderLabel": false,
              "semanticStrokeWidth": false,
              "strokeWidth": 4,
              "markerHeight": 6,
              "markerWidth": 6
            }
          
    };
     
    // graph event callbacks
    const onClickGraph = function() {
        window.alert(`Clicked the graph background`);
    };
     
    const onClickNode = function(nodeId) {
        window.alert(`Clicked node ${nodeId}`);
    };
     
    const onDoubleClickNode = function(nodeId) {
        window.alert(`Double clicked node ${nodeId}`);
    };
     
    const onRightClickNode = function(event, nodeId) {
        window.alert(`Right clicked node ${nodeId}`);
    };
 
    const onMouseOverNode = function(nodeId) {
        window.alert(`Mouse over node ${nodeId}`);
    };
     
    const onMouseOutNode = function(nodeId) {
        window.alert(`Mouse out node ${nodeId}`);
    };
     
    const onClickLink = function(source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };
     
    const onRightClickLink = function(event, source, target) {
        window.alert(`Right clicked link between ${source} and ${target}`);
    };

    const onMouseOverLink = function(source, target) {
        window.alert(`Mouse over in link between ${source} and ${target}`);
    };
     
    const onMouseOutLink = function(source, target) {
        window.alert(`Mouse out link between ${source} and ${target}`);
    };
     
    const onNodePositionChange = function(nodeId, x, y) {
        window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
    };

  return (
    <div>
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

export default Graphic;