import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import productsData from '../data/productos.js';
import ProductCard from '../components/ProductCard';
import imgCarrusel1 from '../img/carrusel/carrusel1.jpg';
import imgCarrusel2 from '../img/carrusel/carrusel2.avif';


function HomePage() {
  const featuredProducts = productsData.slice(0, 4);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={imgCarrusel1} alt="Oferta Monitores" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imgCarrusel2} alt="Nuevos Teclados" />
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5">
        <h2 className="mb-4 text-white">Productos Destacados</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {featuredProducts.map(product => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;