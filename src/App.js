import React, { useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de tu lista de productos real
import productsData from './data/productos.js'; 

// Componentes y Páginas
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import LoginPage from './pages/LoginPage';     
import ContactoPage from './pages/ContactoPage'; 
import RegistroPage from './pages/RegistroPage';
import ProductoDetallePage from './pages/ProductoDetallePage';  
import Cartpage from './pages/Cartpage';

function App() {
    // 1. Estado del carrito
    const [carrito, setCarrito] = useState([]);
    // 2. Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Lógica para agregar un producto al carrito
    const agregarAlCarrito = (productoAAgregar) => {
        const existe = carrito.find(item => item.id === productoAAgregar.id);

        if (existe) {
            // Si existe, aumentamos la cantidad
            setCarrito(
                carrito.map(item =>
                    item.id === productoAAgregar.id
                        ? { ...existe, cantidad: existe.cantidad + 1 }
                        : item
                )
            );
        } else {
            // Si no existe, lo agregamos con cantidad inicial 1
            setCarrito([...carrito, { ...productoAAgregar, cantidad: 1 }]);
        }
    };
    
    // Función que la NavigationBar llama cuando el usuario busca algo
    const handleSearchSubmit = (term) => {
        setSearchTerm(term);
        // NOTA: No necesitamos navegar explícitamente, la ruta /catalogo
        // ya se renderiza en caso de que se actualicen los filtros.
    };

    // 🌟 Lógica de Filtrado Central: Aplica el filtro de búsqueda a la lista completa
    const filteredProducts = useMemo(() => {
        if (!searchTerm) {
            return productsData;
        }

        const lowerCaseTerm = searchTerm.toLowerCase();

        return productsData.filter(product =>
            // Busca coincidencias en el nombre o descripción
            product.nombre.toLowerCase().includes(lowerCaseTerm) ||
            product.descripcion.toLowerCase().includes(lowerCaseTerm)
        );
    }, [searchTerm]);

    return (
        <Router>
            <div className="App bg-dark">
                {/* 1. Pasamos el carrito y la función de búsqueda a la barra de navegación */}
                <NavigationBar 
                    carrito={carrito} 
                    onSearchSubmit={handleSearchSubmit} 
                    onClearSearch={clearSearch} 
                /> 
                <main className="py-3">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        
                        {/* 2. Pasamos la lista de productos filtrados a CatalogoPage en ambas rutas */}
                        <Route path="/catalogo" element={<CatalogoPage products={filteredProducts} />} />
                        <Route path="/catalogo/:category" element={<CatalogoPage products={filteredProducts} />} />
                        
                        <Route path="/login" element={<LoginPage />} />        
                        <Route path="/contacto" element={<ContactoPage />} />    
                        <Route path="/registro" element={<RegistroPage />} />
                        
                        <Route 
                            path="/producto/:productoId" 
                            element={<ProductoDetallePage onAgregarAlCarrito={agregarAlCarrito} />} 
                        />

                        <Route 
                            path="/carrito" 
                            element={<Cartpage carrito={carrito} setCarrito={setCarrito} />} 
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;