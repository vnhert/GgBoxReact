import React, { useState } from 'react';
// Importamos 'Alert' para los mensajes
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RegistroPage() {
  // --- Estados para los campos ---
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // --- Estados para los mensajes ---
  const [error, setError] = useState(null); // Un solo estado para todos los errores
  const [successMessage, setSuccessMessage] = useState(null);

  /**
   * Manejador para el envío del formulario
   */
  const handleSubmit = (e) => {
    // 1. Evita que la página se recargue
    e.preventDefault(); 
    
    // 2. Limpiamos mensajes anteriores
    setSuccessMessage(null);
    setError(null);

    // --- 3. Validación (la parte que pediste) ---
    
    // Revisamos el nombre de usuario
    if (!username) {
      setError('Debes ingresar un nombre de usuario.');
      return; // Detiene la ejecución
    }

    // Revisamos el email
    if (!email.includes('@')) {
      setError('Por favor, ingresa un correo electrónico válido (debe tener @).');
      return; // Detiene la ejecución
    }
    
    // Revisamos la contraseña
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return; // Detiene la ejecución
    }

    // --- 4. Si llegamos aquí, todo es VÁLIDO ---
    
    console.log('Enviando datos de registro:', { email, username, password });

    // Mostramos el mensaje de éxito
    setSuccessMessage('¡Registrado con éxito!');
    
    // Limpiamos el formulario
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card bg="dark" text="white" style={{ width: '25rem' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Crear Cuenta</h2>

          {/* === MOSTRAR MENSAJE DE ÉXITO === */}
          {successMessage && (
            <Alert variant="success">
              {successMessage}
            </Alert>
          )}

          {/* === MOSTRAR MENSAJE DE ERROR === */}
          {error && (
            <Alert variant="danger">
              {error}
            </Alert>
          )}

          {/* Le pasamos el 'handleSubmit' al 'onSubmit' del Form */}
          <Form onSubmit={handleSubmit}>
            
            {/* --- CAMPO EMAIL --- */}
            <Form.Group className="mb-3" controlId="formRegisterEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Ingresa tu email" 
                value={email}
                // Actualizamos el estado cada vez que el usuario escribe
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>

            {/* --- CAMPO NOMBRE DE USUARIO --- */}
            <Form.Group className="mb-3" controlId="formRegisterUsername">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Elige un nombre de usuario" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </Form.Group>

            {/* --- CAMPO CONTRASEÑA --- */}
            <Form.Group className="mb-3" controlId="formRegisterPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Crea una contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
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