import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!email || !password) {
      setError('Debes ingresar un correo y una contraseña.');
      return;
    }

    try {
      console.log("Intentando conectar con Backend...");
      // 💡 CAMBIO CLAVE: Cambiado de 172.31.31.239 a la IP de Backend permitida (54.86.25.1)
      const response = await fetch('http://54.86.25.1:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: email,
            password: password
        }),
      });


      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('¡Inicio de sesión exitoso!');
        localStorage.setItem('token', data.jwt);
        localStorage.setItem('role', data.role);
        console.log("Login OK. Rol recibido:", data.role);


        navigate('/catalogo');

      } else {
        console.log("Error del servidor:", response.status);
        setError('Credenciales incorrectas');
      }

    } catch (err) {
      console.error("Error de red:", err);
      console.error(err);
      setError('Error de conexión con el servidor');
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