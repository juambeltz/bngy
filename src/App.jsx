// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import Usados from "./pages/Usados";
import Nuevos from "./pages/Nuevos";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Flex container con min-h-screen */}
        <Header />
        <main className="flex-grow"> {/* Main que toma todo el espacio disponible */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/usados" element={<Usados />} />
            <Route path="/nuevos" element={<Nuevos />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </Router>
  );
};

export default App;