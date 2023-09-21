import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.svg';

function Navbar1(props) {
    return (
        <>
        <Navbar className="bg-body-tertiary  justify-content-between px-5" data-bs-theme="dark">
        <Nav className=' my-4' variant="pills" defaultActiveKey="/home">
          <Nav.Item className='mx-3'>
            <Nav.Link  href="/home">Active</Nav.Link>
          </Nav.Item >
          <Nav.Item className='mx-3'>
            <Nav.Link eventKey="link-1">Option 1</Nav.Link>
          </Nav.Item>
          <Nav.Item className='mx-3'>
            <Nav.Link eventKey="link-2" >
              Option 2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
        <img width={100.0} height={60} src={logo} alt="Logo" />
        <h2 style={{color:'white', display: 'flex', justifyContent: 'center'}}>{props.title}</h2>
        </div>
    
          <Form >
            <Row >
              <Col xs="auto">
                <Form.Control id='search' name='search'
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
        
        </>
    );
}

export default Navbar1;