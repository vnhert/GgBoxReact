// src/components/ProductCard.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // <-- Importa Link

function ProductCard({ product }) {
  return (
    // 👇 Envuelve la tarjeta en un Link y elimina la decoración de texto 👇
    <Link to={`/producto/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card className="h-100 bg-dark text-white product-card">
        <Card.Img variant="top" src={product.img} className="card-img-top" />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>{product.descripcion}</Card.Text>
          <Card.Text as="h5" className="mt-auto">$ {product.precio.toLocaleString('es-CL')}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* El botón ahora es más visual, el click lo captura la tarjeta */}
          <Button variant="primary" className="w-100" as="div" style={{ pointerEvents: 'none' }}>
            Ver Detalles
          </Button>
        </Card.Footer>
      </Card>
    </Link>
  );
}

export default ProductCard;