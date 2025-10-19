import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './NavigationBar';

describe('NavigationBar Component', () => {

    it('debe renderizar el nombre de la marca "GGBOX"', () => {
        render(<Router><NavigationBar /></Router>);
        expect(screen.getByText('GGBOX')).not.toBeNull();
    });

    describe('cuando se maneja el carrito', () => {
        it('NO debe mostrar el contador (Badge) si el carrito está vacío', () => {
            render(<Router><NavigationBar carrito={[]} /></Router>);
            expect(screen.queryByRole('status')).toBeNull();
        });

        it('DEBE mostrar el contador (Badge) con el número correcto de artículos', () => {
            const mockCarrito = [{ cantidad: 2 }, { cantidad: 3 }];
            render(<Router><NavigationBar carrito={mockCarrito} /></Router>);
            expect(screen.getByText('5')).not.toBeNull();
        });
    });

    describe('cuando el usuario interactúa con la búsqueda', () => {
        it('debe llamar a onSearchSubmit con el texto correcto al hacer clic en Buscar', async () => {
            // Creamos un "espía" manual
            let Clicado = false;
            let textoRecibido = '';
            const mockOnSearchSubmit = (text) => {
                Clicado = true;
                textoRecibido = text;
            };

            render(<Router><NavigationBar onSearchSubmit={mockOnSearchSubmit} /></Router>);
            
            await userEvent.type(screen.getByPlaceholderText(/Buscar productos.../i), 'monitor');
            await userEvent.click(screen.getByRole('button', { name: /Buscar/i }));
            
            // Verificamos que nuestro espía manual funcionó
            expect(Clicado).toBe(true);
            expect(textoRecibido).toBe('monitor');
        });

        it('debe limpiar el campo de búsqueda después de enviar el formulario', async () => {
            render(<Router><NavigationBar onSearchSubmit={() => {}} /></Router>);
            const searchInput = screen.getByPlaceholderText(/Buscar productos.../i);
            
            await userEvent.type(searchInput, 'texto de prueba');
            expect(searchInput.value).toBe('texto de prueba');
            
            await userEvent.click(screen.getByRole('button', { name: /Buscar/i }));
            expect(searchInput.value).toBe('');
        });
    });

    it('debe llamar a onClearSearch al hacer clic en un enlace de categoría', async () => {
        //Creamos otro "espía" manual
        let Clicado = false;
        const mockOnClearSearch = () => {
            Clicado = true;
        };
        
        render(<Router><NavigationBar onClearSearch={mockOnClearSearch} /></Router>);
        
        await userEvent.click(screen.getByText(/Categorías/i));
        await userEvent.click(await screen.findByText('Monitores'));
        
        // Verificamos que el espía fue llamado
        expect(Clicado).toBe(true);
    });
});