import React from 'react';
import {Navbar} from 'react-bootstrap';
function Navigbar() {
  return (
  <div>
  <Navbar  fixed="top" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
        <img alt="Video Analysis" src="/l.svg" width="30" height="30" className="d-inline-block align-top" />{' '}
    </Navbar.Brand>
  </Navbar>
  </div>
  );
}
export default Navigbar;