import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {

    const mockProduct = {
        id: 1,
        nombre: 'Monitor Gamer de Prueba',
        precio: 50000,
        img: 'test-image.png' 
    };

    // PRUEBA 1: 
    it('debe renderizar el nombre y el precio del producto correctamente', () => {
        render(
            <Router>
                <ProductCard product={mockProduct} />
            </Router>
        );
        expect(screen.getByText(/Monitor Gamer de Prueba/i)).not.toBeNull();
        expect(screen.getByText(/\$ 50.000/i)).not.toBeNull();
    });

    // PRUEBA 2: CON ASYNC/AWAIT
    //  1. Convertimos la función de la prueba en 'async'
    it('debe navegar a la página de detalles del producto al hacer clic', async () => {
        
        const MockDetallePage = () => <div>Página de Detalles del Producto 1</div>;

        render(
            <Router>
                <Routes>
                    <Route path="/" element={<ProductCard product={mockProduct} />} />
                    <Route path="/producto/1" element={<MockDetallePage />} />
                </Routes>
            </Router>
        );

        // 2. Simulamos el clic (esto no cambia)
        userEvent.click(screen.getByText(/Monitor Gamer de Prueba/i));

        // 3. Usamos 'await findByText'. Esto le dice a la prueba que ESPERE
        //    hasta que el texto aparezca en la pantalla (con un tiempo límite).
        const elementoPaginaDestino = await screen.findByText(/Página de Detalles del Producto 1/i);
        
       
        expect(elementoPaginaDestino).not.toBeNull();
    });
});