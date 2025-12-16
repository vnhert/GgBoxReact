import React, { useState, useMemo, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes y Páginas: TODOS LOS IMPORTS DEBEN IR JUNTOS AL INICIO
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import LoginPage from './pages/LoginPage';
import ContactoPage from './pages/ContactoPage';
import RegistroPage from './pages/RegistroPage';
import ProductoDetallePage from './pages/ProductoDetallePage';
import Cartpage from './pages/Cartpage';

// ----------------------------------------------------
// LAS CONSTANTES COMO LA URL DEBEN IR DESPUÉS DE LOS IMPORTS
// ----------------------------------------------------
const API_BASE_URL = 'http://172.31.31.239:8080/api';
// No necesitamos la importación de datos locales ahora:
// import productsData from './data/productos.js'; // Línea comentada, ¡bien!


function App() {
    // 1. Estados para el carrito y búsqueda (ya existían)
    const [carrito, setCarrito] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // 2. NUEVOS ESTADOS para manejar productos reales de la API
    const [productsData, setProductsData] = useState([]); // Almacena todos los productos de la API
    const [loading, setLoading] = useState(true); // Para mostrar una pantalla de carga
    const [error, setError] = useState(null); // Para manejar errores de API

    // ----------------------------------------------------
    // LÓGICA DE CARGA DE PRODUCTOS DESDE LA API (useEffect)
    // ----------------------------------------------------
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                // Petición GET a la ruta de productos de Spring Boot
                const response = await fetch(`${API_BASE_URL}/productos`);

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: No se pudo cargar el catálogo.`);
                }

                const data = await response.json();

                // El backend puede devolver IDs numéricos. Aseguramos que la estructura sea correcta.
                setProductsData(data);

            } catch (err) {
                console.error("Fallo al obtener productos:", err);
                setError("Fallo al cargar productos desde el servidor.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // El array vacío asegura que esto se ejecute SOLO una vez al montar

    // Lógica para agregar un producto al carrito (sin cambios)
    const agregarAlCarrito = (productoAAgregar) => {
        const existe = carrito.find(item => item.id === productoAAgregar.id);

        if (existe) {
            setCarrito(
                carrito.map(item =>
                    item.id === productoAAgregar.id
                        ? { ...existe, cantidad: existe.cantidad + 1 }
                        : item
                )
            );
        } else {
            setCarrito([...carrito, { ...productoAAgregar, cantidad: 1 }]);
        }
    };

    // Función de búsqueda (sin cambios)
    const handleSearchSubmit = (term) => {
        setSearchTerm(term);
    };
    const clearSearch = () => {
        setSearchTerm('');
    };

    // Lógica de Filtrado Central (usa productsData cargado de la API)
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
    }, [searchTerm, productsData]);

    if (loading) {
        return <h1 className="text-center text-white mt-5">Cargando Productos...</h1>;
    }

    if (error) {
        return <h1 className="text-center text-danger mt-5">Error: {error}</h1>;
    }


    return (
        <Router>
            <div className="App bg-dark">
                <NavigationBar
                    carrito={carrito}
                    onSearchSubmit={handleSearchSubmit}
                    onClearSearch={clearSearch}
                />
                <main className="py-3">
                    <Routes>
                        <Route path="/" element={<HomePage />} />

                        {/* 3. Pasamos la lista de productos filtrados y cargados de la API */}
                        <Route path="/catalogo" element={<CatalogoPage products={filteredProducts} />} />
                        <Route path="/catalogo/:category" element={<CatalogoPage products={filteredProducts} />} />

                        {/* 4. El login y registro ya tienen la URL corregida */}
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/contacto" element={<ContactoPage />} />
                        <Route path="/registro" element={<RegistroPage />} />

                        <Route
                            path="/producto/:productoId"
                            element={<ProductoDetallePage products={productsData} onAgregarAlCarrito={agregarAlCarrito} />}
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