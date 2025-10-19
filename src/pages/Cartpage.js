import React from 'react';
import { Container, Card, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Recibimos 'carrito' y 'setCarrito' como props
function Cartpage({ carrito, setCarrito }) { 
  
  // Función para calcular el total
  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  
  // Función para eliminar un producto
  const handleEliminar = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  // Función: Ajustar cantidad (aumentar: delta=1, disminuir: delta=-1)
  const handleAjustarCantidad = (id, delta) => {
    setCarrito(
      carrito.map(item => {
        if (item.id === id) {
          const nuevaCantidad = item.cantidad + delta;
          // Si la nueva cantidad es 0, elimina el artículo
          if (nuevaCantidad <= 0) {
            return null; 
          }
          return { ...item, cantidad: nuevaCantidad };
        }
        return item;
      }).filter(item => item !== null) // Filtra los elementos eliminados
    );
  };

  return (
    <Container className="mt-5">
      <Card bg="dark" text="white">
        <Card.Body>
          <Card.Title as="h2" className="mb-4 text-center">🛍️ Mi Carrito de Compras</Card.Title>
            
          {carrito.length === 0 ? (
            // Carrito vacío
            <div className="text-center p-5">
              <p className="lead">Tu carrito está vacío. ¡Empieza a comprar!</p>
              <Link to="/catalogo" className="btn btn-primary mt-3">
                Ver Catálogo
              </Link>
            </div>
          ) : (
            // Productos en el carrito
            <Row>
              <Col md={8}>
                <ListGroup variant="flush">
                  {carrito.map((item, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center bg-dark text-white border-secondary py-3">
                      
                      <div className="d-flex align-items-center flex-grow-1">
                        
                        {/* Control de Cantidad (+/-) */}
                        <div className="d-flex flex-column me-4 text-center">
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            onClick={() => handleAjustarCantidad(item.id, 1)}
                            className="p-0 mb-1 fw-bold"
                            style={{ width: '30px', height: '30px' }}
                          >+</Button>
                          <span className="badge bg-primary my-1" style={{ fontSize: '1rem' }}>{item.cantidad}</span> 
                          <Button 
                            variant="secondary" 
                            size="sm" 
                            onClick={() => handleAjustarCantidad(item.id, -1)}
                            className="p-0 mt-1 fw-bold"
                            style={{ width: '30px', height: '30px' }}
                            disabled={item.cantidad <= 1} // Deshabilita si solo queda 1
                          >-</Button>
                        </div>

                        <div>
                          <h5>{item.nombre}</h5>
                          <small className="text-muted">Precio Unitario: $ {item.precio.toLocaleString('es-CL')}</small>
                        </div>
                      </div>

                      <div className="text-end">
                        <strong className="d-block mb-2">Total: $ {(item.precio * item.cantidad).toLocaleString('es-CL')}</strong>
                        <Button 
                          variant="danger" 
                          size="sm" 
                          className="ms-3"
                          onClick={() => handleEliminar(item.id)}
                        >
                          Eliminar
                        </Button>
                      </div>

                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              
              {/* Resumen del Carrito */}
              <Col md={4}>
                <Card bg="secondary" text="white" className="mt-3 mt-md-0">
                  <Card.Header as="h4">Resumen</Card.Header>
                  <Card.Body>
                    <p className="d-flex justify-content-between">
                      <span>Subtotal ({carrito.reduce((count, item) => count + item.cantidad, 0)} {carrito.reduce((count, item) => count + item.cantidad, 0) === 1 ? 'artículo' : 'artículos'}):</span>
                      <strong>$ {total.toLocaleString('es-CL')}</strong>
                    </p>
                    <hr />
                    <p className="d-flex justify-content-between h4 text-success">
                      <span>**TOTAL A PAGAR:**</span>
                      **$ {total.toLocaleString('es-CL')}**
                    </p>
                    <Button variant="success" className="w-100 mt-3" disabled={carrito.length === 0}>
                      Ir a Pagar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cartpage; 
