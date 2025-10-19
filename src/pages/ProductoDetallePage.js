// src/pages/ProductoDetallePage.js
// src/pages/ProductoDetallePage.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import productsData from '../data/productos.js';

function ProductoDetallePage() {
  // Usamos el hook 'useParams' para leer el ID del producto desde la URL
  const { productoId } = useParams();

  // Buscamos el producto en nuestra "base de datos"
  // Convertimos el productoId de texto a número para que la búsqueda funcione
  const producto = productsData.find(p => p.id === parseInt(productoId));

  // Si no se encuentra el producto, mostramos un mensaje
  if (!producto) {
    return (
      <Container className="text-center mt-5 text-white"> {/* Añadí text-white para que se vea */}
        <h2>Producto no encontrado</h2>
        <Link to="/">Volver al inicio</Link>
      </Container>
    );
  }

  // Si se encuentra, mostramos la vista detallada
  return (
    <Container className="my-5">
      <Card bg="dark" text="white">
        <Row className="g-0">
          <Col md={6}>
            <Image src={producto.img} alt={producto.nombre} fluid style={{ padding: '2rem', backgroundColor: '#0d1117' }} />
          </Col>
          <Col md={6}>
            <Card.Body className="d-flex flex-column p-4">
              <Card.Title as="h1">{producto.nombre}</Card.Title>
              <Card.Text className="text-muted flex-grow-1">
                {producto.descripcion}
              </Card.Text>
              <div className="mt-auto">
                <p><strong>Categoría:</strong> <span className="text-capitalize">{producto.categoria}</span></p>
                <p><strong>Stock disponible:</strong> {producto.stock} unidades</p>
                <h2 className="my-3 text-primary">$ {producto.precio.toLocaleString('es-CL')}</h2>
                <Button variant="primary" size="lg" className="w-100">
                  Agregar al Carrito
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

// 👇 Esta es la línea que soluciona el problema.
export default ProductoDetallePage;