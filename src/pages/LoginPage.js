

import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function LoginPage() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card bg="dark" text="white" style={{ width: '25rem' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Ingresar
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p>¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}


export default LoginPage;