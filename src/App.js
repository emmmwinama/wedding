import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './components/Home';
import Program from './components/Program';
import WeddingGallery from './components/WeddingGallery';
import Messages from './components/Messages';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './css/custom.css';
import NavBar from "./components/NavBar";
import Shower from "./components/Shower";
import Footer from "./components/Footer";
import Story from './components/Story';
function App() {
  return (
      <HelmetProvider>
          <Router>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/program" element={<Program/>}/>
                  <Route path="/gallery" element={<WeddingGallery/>}/>
                  <Route path="/messages" element={<Messages/>}/>
                  <Route path="/shower" element={<Shower/>}/>
                  <Route path="/story" element={<Story/>}/>
              </Routes>
              <Footer/>
          </Router>
      </HelmetProvider>

  );
}

export default App;
