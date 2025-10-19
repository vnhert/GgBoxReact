// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes y Páginas
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import LoginPage from './pages/LoginPage';       
import ContactoPage from './pages/ContactoPage'; 
import RegistroPage from './pages/RegistroPage';
import ProductoDetallePage from './pages/ProductoDetallePage'; 


function App() {
  return (
   
    <Router>
      <div className="App bg-dark">
        <NavigationBar />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogo" element={<CatalogoPage />} />
            <Route path="/catalogo/:category" element={<CatalogoPage />} />
            <Route path="/login" element={<LoginPage />} />         
            <Route path="/contacto" element={<ContactoPage />} />   
            <Route path="/registro" element={<RegistroPage />} />
            <Route path="/producto/:productoId" element={<ProductoDetallePage />} />
            
          </Routes>
        </main>
      </div>
    </Router>
   
  );
}

export default App;