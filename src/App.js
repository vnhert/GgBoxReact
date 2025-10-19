// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes y Páginas
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import CatalogoPage from './pages/CatalogoPage';
import LoginPage from './pages/LoginPage';       // <-- 1. Importa Login
import ContactoPage from './pages/ContactoPage'; // <-- 1. Importa Contacto

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
            <Route path="/login" element={<LoginPage />} />         {/* <-- 2. Añade la ruta */}
            <Route path="/contacto" element={<ContactoPage />} />   {/* <-- 2. Añade la ruta */}
            {/* Próximamente:
            <Route path="/registro" element={<RegistroPage />} />
            */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;