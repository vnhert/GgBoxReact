import React, { useState } from 'react';
// Importamos 'Alert' y 'Spinner' para los mensajes y la carga
import { Container, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// URL base de tu API de Spring Boot
const BASE_API_URL = "http://localhost:8080/api/auth/register"; 

function RegistroPage() {
  // --- Estados para los campos ---
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); // Usado como 'nombre' para la API
  const [password, setPassword] = useState('');

  // --- Estados para los mensajes y la carga ---
  const [error, setError] = useState(null); // Un solo estado para todos los errores
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para la carga

  /**
   * Manejador para el envío del formulario. Ahora asíncrono.
   */
  const handleSubmit = async (e) => {
    // 1. Evita que la página se recargue
    e.preventDefault(); 
    
    // 2. Limpiamos mensajes anteriores
    setSuccessMessage(null);
    setError(null);

    // --- 3. Validación Inicial (Mejor UX) ---
    
    if (!username) {
      setError('Debes ingresar un nombre de usuario.');
      return; 
    }
    if (!email.includes('@')) {
      setError('Por favor, ingresa un correo electrónico válido (debe tener @).');
      return; 
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return; 
    }

    // --- 4. Llamada a la API ---
    setIsLoading(true);

    try {
      const response = await fetch(BASE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Mapeamos el 'username' del estado al campo 'nombre' que el backend de Spring Boot espera
        body: JSON.stringify({ 
          username: username, 
          email: email, 
          password: password 
        }),
      });

      if (response.ok) {
        // Registro exitoso (Esperamos 201 Created del backend)
        setSuccessMessage('¡Registro exitoso! Ahora puedes iniciar sesión.');
        
        // Limpiamos el formulario
        setEmail('');
        setUsername('');
        setPassword('');
      } else if (response.status === 409) {
        // Email duplicado (Conflict)
        const conflictMessage = await response.text();
        setError(conflictMessage || "Error: El email ya está registrado.");
      } else {
        // Otro error del servidor (ej: 500)
        const errorDetail = await response.text();
        setError(`Error en el servidor (${response.status}). Detalle: ${errorDetail}`);
      }
    } catch (err) {
      // Error de red (servidor caído o CORS)
      console.error("Error de conexión:", err);
      setError("No se pudo conectar con el servidor API. Verifica la URL y si el servidor está activo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      {/* Mantenemos el estilo oscuro original */}
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
          {/* El formulario y los campos se deshabilitan durante la carga */}
          <Form onSubmit={handleSubmit}>
            
            {/* --- CAMPO EMAIL --- */}
            <Form.Group className="mb-3" controlId="formRegisterEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Ingresa tu email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </Form.Group>
            
            {/* El botón ahora muestra un spinner y se deshabilita durante la carga */}
            <Button 
              variant="primary" 
              type="submit" 
              className="w-100 mt-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Registrando...
                </>
              ) : (
                'Registrarse'
              )}
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