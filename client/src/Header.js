import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';

function Header({ history }){
    return (<Navbar bg="dark" variant="dark" className="justify-content-between">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    <FontAwesomeIcon icon={faPlus} color="white" onClick={()=>{history.push('/add')}}/>
  </Navbar.Collapse>
  </Navbar>)
}

export default withRouter(Header);