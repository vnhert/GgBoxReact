import React, { useState } from 'react'; 
import { useParams, Link, useNavigate } from 'react-router-dom'; 
import { Container, Row, Col, Image, Button, Card, Form } from 'react-bootstrap';
import productsData from '../data/productos.js';

// Recibimos 'onAgregarAlCarrito' como prop
function ProductoDetallePage({ onAgregarAlCarrito }) {
const { productoId } = useParams();
const navigate = useNavigate(); // 👈 Inicializamos el hook de navegación
const producto = productsData.find(p => p.id === parseInt(productoId)); 
// Estado local para manejar la cantidad si quieres que el usuario elija
// Por simplicidad, lo haremos solo con 1, pero este es el lugar para la UI de cantidad.

 // Si no se encuentra el producto, mostramos un mensaje
 if (!producto) {
    return (
       <Container className="text-center mt-5 text-white">
         <h2>Producto no encontrado</h2>
         <Link to="/">Volver al inicio</Link>
       </Container>
    );
 }

 // Función que se ejecuta al presionar el botón
const handleAgregar = () => {
   // Aseguramos que solo se pasa la información del producto
      onAgregarAlCarrito(producto); 
  
// Redirige a la página del carrito
     navigate('/carrito'); 
 };

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
                <Form.Group controlId="cantidad"></Form.Group>
                 {/* Conectamos el botón con la función handleAgregar */}
               <Button 
                 variant="primary" 
                   size="lg" 
                 className="w-100"
                  onClick={handleAgregar} // 👈 ¡Aquí está la magia!
          >
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

export default ProductoDetallePage;