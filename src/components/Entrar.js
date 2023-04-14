import React from 'react';
import { Card, Col, Container, FormText, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CardBody } from 'reactstrap';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook} from "react-icons/bs";
import Login from './Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login_face from './FacebookL';
import ReCAPTCHA from "react-google-recaptcha";
 


function Entrar (){
  function onChange(value) {
    console.log("Captcha value:", value);
  }
    return(
        <Container>
            <Card className='m-5'>
                <CardBody>
            <Row>
                <Col>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingrese el correo electronico" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordarme" />
        <a href="">¿Olvidaste tu contraseña?</a>
      </Form.Group>
      <div className='container d-flex align-items-center justify-content-center mb-2'>
  <ReCAPTCHA
    sitekey="6LcJDzglAAAAAAf9fvDrqn4y4mZBVW_uZx18aH0Y"
    onChange={onChange}
  />
  </div>

      <Button variant="primary" type="submit">
        Ingresar
      </Button>
      </Form>
      </Col>
    </Row>

      <Row>
      <FormText>¿No eres usuario? <a href="">Registrate</a></FormText>
      <FormText>O ingresa con:</FormText>
      
        <Col>
        <div className='iconos'>
      <Login/>
        <Login_face/>
        </div>
        </Col>
        </Row>
    
    </CardBody>
    </Card>
    </Container>
    )
}

export default Entrar;