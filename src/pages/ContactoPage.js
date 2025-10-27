import React, { useState } from 'react'; // 1. Importar useState
import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';

function ContactoPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    setError(null);
    setSuccessMessage(null);

    if (!name || !email || !subject || !message) {
      setError('Todos los campos son obligatorios.');
      return; 
    }

    if (!email.includes('@')) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return; 
    }

    
    console.log('Enviando mensaje:', { name, email, subject, message });

    setSuccessMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.');
    
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

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

              {/**/}
              {successMessage && (
                <Alert variant="success">
                  {successMessage}
                </Alert>
              )}

              {}
              {error && (
                <Alert variant="danger">
                  {error}
                </Alert>
              )}

              {}
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formContactName">
                      <Form.Label>Nombre</Form.Label>
                      {}
                      <Form.Control 
                        type="text" 
                        placeholder="Tu nombre completo" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formContactEmail">
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Tu correo electrónico" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formContactSubject">
                  <Form.Label>Asunto</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Asunto del mensaje" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContactMessage">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Escribe tu mensaje aquí..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
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