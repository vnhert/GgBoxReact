// src/components/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ product }) {
  return (
    <Card className="h-100 bg-dark text-white product-card">
      <Card.Img variant="top" src={product.img} className="card-img-top" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>{product.descripcion}</Card.Text>
        <Card.Text as="h5" className="mt-auto">$ {product.precio.toLocaleString('es-CL')}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" className="w-100">Agregar al Carrito</Button>
      </Card.Footer>
    </Card>
  );
}

export default ProductCard;