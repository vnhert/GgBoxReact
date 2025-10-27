import React, { useState } from 'react'; 
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    setError(null);
    setSuccessMessage(null);

    if (!email || !password) {
      setError('Debes ingresar un correo y una contraseña.');
      return; 
    }

    const USUARIO_CORRECTO = 'user@test.com';
    const PASSWORD_CORRECTA = 'password123';

    if (email === USUARIO_CORRECTO && password === PASSWORD_CORRECTA) {
     
      setSuccessMessage('¡Inicio de sesión exitoso!');
      setError(null);
      
 
      setEmail('');
      setPassword('');


      
    } else {
    
      setError('Correo o contraseña incorrectos.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card bg="dark" text="white" style={{ width: '25rem' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>

          {/*MENSAJE DE ÉXITO*/}
          {successMessage && (
            <Alert variant="success">
              {successMessage}
            </Alert>
          )}

          {/*MENSAJE DE ERROR*/}
          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          {/* */}
          <Form onSubmit={handleSubmit}>
            
            {/* CAMPO EMAIL */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </Form.Group>

            {/*CAMPO CONTRASEÑA*/}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
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