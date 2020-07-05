import React, { useState } from 'react';
import '../App.css';
import {Col,ButtonToolbar,Button,Form} from 'react-bootstrap';

function UploadVideo() {
  return (
  
    <Form action="http://localhost:5000/video_upload" method="POST" enctype ="multipart/form-data">
    <br /><br />
    <Form.Row>
    <Col md={7}>
    <div class="box">
    <div class="js--image-preview"></div>
    <div class="upload-options">
    <label>
    <Form.Control type="file" name="file_name" class="image-upload" />
    </label>
    </div>
    </div>
    </Col>
    <Col md={4}>
        <br /><br /><br />
        <label>
          <Form.Control type="text" name="sensor_id" />
        </label>
        <br /> <br />
       <ButtonToolbar>
        <Button fullWidth type="submit" variant="warning" size="lg" active>
            ANALYZE VIDEO
        </Button>
    </ButtonToolbar>
    <br /><br />
    <a href="localhost:5000/view_results" >
    <Button   variant="primary" size="lg" active>
            VIEW RESULTS
    </Button>
    </a>
    </Col>
    </Form.Row>
    </Form>
    
  );
}

export default UploadVideo;