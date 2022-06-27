// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage'
import ProductosPage from './pages/ProductosPage'
import ServiciosPage from './pages/ServiciosPage'
import ContactoPage from './pages/ContactoPage'
import NovedadesPage from './pages/NovedadesPage'

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='productos' element={<ProductosPage />} />
          <Route path='servicios' element={<ServiciosPage />} />
          <Route path='novedades' element={<NovedadesPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;