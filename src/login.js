import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './style.css';
import logo from './logo.svg';

function Login() {
  return (

    <Container className='container-500 my-5 p-5'>
      <Row>
        <Col>
        <h1 className='head'>Login In</h1>
        <img className='login_img mt-4' width={100.0} height={60} src={logo} alt="Logo" />
        
        <Form>
      <Row className='my-5'>
        <Col >
          <Form.Control id='email' name='email' placeholder="Email" />
        </Col>
        </Row>
        <Row className='my-4'>
        <Col>
          <Form.Control id='password' name='password' placeholder="Password" />
        </Col>
        </Row>
        <Row className='my-5'>
        <Col>
          <Button className='btn1'>Login In</Button>
        </Col>
        </Row>
    </Form>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Login;
