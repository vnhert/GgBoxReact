import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

function ContactoPage() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card bg="dark" text="white">
            <Card.Body>
              <h2 className="text-center mb-4">Contáctanos</h2>
              <p className="text-center text-muted mb-4">
                ¿Tienes alguna pregunta o comentario? Rellena el formulario y nos pondremos en contacto contigo.
              </p>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formContactName">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" placeholder="Tu nombre completo" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formContactEmail">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control type="email" placeholder="Tu correo electrónico" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formContactSubject">
                  <Form.Label>Asunto</Form.Label>
                  <Form.Control type="text" placeholder="Asunto del mensaje" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContactMessage">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje aquí..." />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Enviar Mensaje
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactoPage;