import React, { useState } from 'react';
import '../App.css';
import {Col,ButtonToolbar,Button,Form} from 'react-bootstrap';

function UploadVideo() {
  return (
  
    <Form action="http://10.114.40.100:5000/video_upload" method="POST" enctype ="multipart/form-data">
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
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       <ButtonToolbar>
        <Button type="submit" variant="warning" size="lg" active>
            Analyze Video
        </Button>
    </ButtonToolbar>
    </Col>
    </Form.Row>
    </Form>
    
  );
}

export default UploadVideo;