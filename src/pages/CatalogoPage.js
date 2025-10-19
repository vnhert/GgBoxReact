// src/pages/CatalogoPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import productsData from '../data/productos.js';
import ProductCard from '../components/ProductCard';

function CatalogoPage() {
  const { category } = useParams();
  const filteredProducts = category ? productsData.filter(p => p.categoria === category) : productsData;
  const title = category ? `Categoría: ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Todo el Catálogo';

  return (
    <Container className="mt-4">
      <h2 className="text-white">{title}</h2>
      <Row xs={1} md={2} lg={4} className="g-4 mt-3">
        {filteredProducts.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CatalogoPage;