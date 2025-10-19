import React, { useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// Asegúrate de que esta ruta sea correcta para el componente de tarjeta de producto
import ProductCard from '../components/ProductCard'; 
// NOTA: Ya no importamos productsData, lo recibimos como prop desde App.js

// Este componente ahora recibe la lista de productos ya filtrada por el término de búsqueda
function CatalogoPage({ products = [] }) {
    // Usamos useParams para obtener el parámetro de la URL (e.g., /catalogo/monitor)
    const { category } = useParams();

    // 1. Aplicar el filtro de categoría sobre la lista que ya viene filtrada por búsqueda
    const displayedProducts = useMemo(() => {
        // La lista de 'products' ya viene filtrada por el término de búsqueda desde App.js
        if (!category) {
            // Si no hay categoría en la URL, mostrar todos los productos recibidos
            return products;
        }

        // Si hay categoría, aplicar un filtro adicional por esa categoría
        return products.filter(product => product.categoria === category);
    }, [products, category]); // Depende de la lista de entrada y de la categoría de la URL

    const title = category 
        ? `Categoría: ${category.charAt(0).toUpperCase() + category.slice(1)}` 
        : 'Catálogo Completo';
        
    const subtitle = category 
        ? `Mostrando ${displayedProducts.length} resultados de la búsqueda actual.`
        : `Mostrando ${displayedProducts.length} productos.`;


    return (
        <Container className="mt-4">
            <h2 className="text-white">{title}</h2>
            
            {displayedProducts.length === 0 ? (
                <p className="text-white-50 mt-3">No se encontraron productos que coincidan con la búsqueda o la categoría seleccionada.</p>
            ) : (
                <>
                    <p className="text-white-50">{subtitle}</p>
                    <Row xs={1} md={2} lg={4} className="g-4 mt-3">
                        {displayedProducts.map(product => (
                            <Col key={product.id}>
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </Container>
    );
}

export default CatalogoPage;