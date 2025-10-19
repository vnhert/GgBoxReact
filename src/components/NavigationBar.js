// src/components/NavigationBar.js

import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// Usamos 'Link' de react-router-dom para una navegación rápida sin recargar la página
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        {/* Usamos 'as={Link}' para que los elementos de Bootstrap se comporten como enlaces de React Router */}
        <Navbar.Brand as={Link} to="/">GGBOX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/catalogo/monitor">Monitores</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/catalogo/teclado">Teclados</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/catalogo/mouse">Mouses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/catalogo/grafica">Tarjetas Gráficas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
            {/* 👇 ¡AQUÍ ESTÁ LA LÍNEA QUE FALTABA! 👇 */}
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;