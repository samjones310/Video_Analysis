import React from 'react';
import VideoPlayer from 'react-simple-video-player';

function VideoPlay() {
  return (
    <div>
      <br /><br /><br /><br />
    <VideoPlayer
    url="http://10.114.40.100:5000/static/demo.mp4"
    autosize="true"
    autoplay="true"
  />
    </div>
  );
}

export default VideoPlay;