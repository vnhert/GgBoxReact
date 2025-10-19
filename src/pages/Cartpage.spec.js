// src/pages/Cartpage.spec.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cartpage from './Cartpage';

describe('CartPage Component', () => {

    // PRUEBA 9: Carrito Vacío
    it('debe mostrar un mensaje indicando que el carrito está vacío', () => {
        render(
            <Router>
                <Cartpage carrito={[]} />
            </Router>
        );
        expect(screen.getByText(/Tu carrito está vacío/i)).not.toBeNull();
    });

    // PRUEBA 10: Carrito con Productos 
    it('debe mostrar los productos y el total correcto cuando el carrito tiene artículos', () => {
        const mockCarrito = [
            { id: 1, nombre: 'Monitor de Prueba', precio: 1000, cantidad: 2 }, // Total: 2000
            { id: 2, nombre: 'Teclado de Prueba', precio: 500, cantidad: 3 },  // Total: 1500
        ];

        render(
            <Router>
                <Cartpage carrito={mockCarrito} setCarrito={() => {}} />
            </Router>
        );

        // Verificamos que los nombres de los productos estén en pantalla
        expect(screen.getByText('Monitor de Prueba')).not.toBeNull();
        expect(screen.getByText('Teclado de Prueba')).not.toBeNull();

     
        // 1. Buscamos el párrafo (<p>) que contiene el texto "TOTAL A PAGAR".
        //    'closest' encuentra el "padre" más cercano que sea un párrafo.
        const totalParagraph = screen.getByText(/TOTAL A PAGAR/i).closest('p');
        
        // 2. Verificamos que el contenido de texto de todo ese párrafo
        //    incluya el total correcto.
        expect(totalParagraph.textContent).toContain('$ 3.500');
    });
});