import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 
import React, { useState, useMemo } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, Badge } from 'react-bootstrap';

// Importamos Link y useNavigate
import { Link, useNavigate } from 'react-router-dom'; 

// Recibimos la nueva prop onClearSearch
function NavigationBar({ carrito = [], onSearchSubmit, onClearSearch }) {
    const navigate = useNavigate();
    // Estado local para capturar el texto de búsqueda (se limpia en App.js al enviar)
    const [searchText, setSearchText] = useState('');
    
    // Calculamos el total de artículos en el carrito para el badge
    const totalArticulos = useMemo(() => {
        return carrito.reduce((total, item) => total + item.cantidad, 0);
    }, [carrito]);

    // Función que se ejecuta al enviar el formulario (presionar Buscar o Enter)
    const handleSearchSubmit = (e) => {
        e.preventDefault(); 
        
        // 1. Llama a la función de App.js para actualizar el término de búsqueda
        if (onSearchSubmit) {
            onSearchSubmit(searchText); 
        }

        // 2. Redirige al usuario al catálogo para mostrar los resultados
        // Esto funciona incluso si ya estás en /catalogo
        navigate('/catalogo');
        
        // Opcional: limpiar el campo de texto después de enviar la búsqueda
        setSearchText('');
    };


    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
            
                <Navbar.Brand as={Link} to="/">GGBOX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    {/* Sección izquierda de navegación */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        
                        {/* 🎯 Implementación del Reset: 
                            Llama a onClearSearch al hacer clic en "Catálogo" 
                            para restablecer la lista completa de productos.
                        */}
                        <Nav.Link as={Link} to="/catalogo" onClick={onClearSearch}>
                            Catálogo
                        </Nav.Link>
                        
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            {/* 🔥 CORREGIDO: Ahora las categorías también llaman a onClearSearch. 
                                Esto asegura que el filtro global de búsqueda se reinicie 
                                antes de aplicar el filtro de categoría.
                            */}
                            <NavDropdown.Item as={Link} to="/catalogo/monitor" onClick={onClearSearch}>Monitores</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/catalogo/teclado" onClick={onClearSearch}>Teclados</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/catalogo/mouse" onClick={onClearSearch}>Mouses</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/catalogo/grafica" onClick={onClearSearch}>Tarjetas Gráficas</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link> 
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                    </Nav>

                    {/* Sección derecha de búsqueda y carrito */}
                    
                    {/* Formulario de búsqueda funcional */}
                    <Form className="d-flex me-3" onSubmit={handleSearchSubmit}>
                        <FormControl 
                            type="search" 
                            placeholder="Buscar productos..." 
                            className="me-2" 
                            aria-label="Search" 
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <Button variant="outline-success" type="submit">Buscar</Button>
                    </Form>
                    
                    {/* Enlace de Carrito */}
                    <Nav>
                        <Nav.Link as={Link} to="/carrito" className="d-flex align-items-center">
                            Carrito 
                            <span className="ms-2">🛒</span>
                            {/* Mostramos el contador si hay artículos */}
                            {totalArticulos > 0 && (
                                <Badge pill bg="danger" className="ms-1">
                                    {totalArticulos}
                                </Badge>
                            )}
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
