import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RegistroPage() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card bg="dark" text="white" style={{ width: '25rem' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Crear Cuenta</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formRegisterEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRegisterUsername">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control type="text" placeholder="Elige un nombre de usuario" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRegisterPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Crea una contraseña" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRegisterConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Confirma tu contraseña" required />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Registrarse
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}


export default RegistroPage;