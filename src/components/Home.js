import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import "../App.css"

function Home() {
  return (
    
    <Container>
      <Row>
        <Col className='titulo'>MÉTODO RENDER</Col>
        <Col className='titulo'>MÉTODO STRICT MODE</Col>
        <Col className='titulo'>MÉTODO RETURN</Col>
      </Row>
      <Row>
        <Col className='info'>Todo componente de React, tiene un método Render que es el que se encarga de renderizar en el navegador el HTML correspondiente al componente. Este método se llama automáticamente cuando se crea un componente y cuando el estado del componente se actualiza (veremos esto más adelante)</Col>
        <Col className='info'>StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment , StrictMode no renderiza nada en la interfaz de usuario. Este modo también activa advertencias y comprobaciones adicionales para sus descendientes.</Col>
        <Col className='info'>Este método es obligatorio en cualquier componente, pues como su nombre lo dicese utiliza para obtener los elementos finales o visualizar o pintar en el navegador. Debe ser una función pura, es decir, no debe modificar el state ni realizar funciones del DOM.</Col>
      </Row>

      <Button
            as="a"
            target="_blank"
            href="https://github.com/DatCosmi/garcial_jueves_9"
            className="btn btn-dark"
          >
            Proyecto en GitHub
          </Button>
    </Container>
  
  )
}

export default Home;