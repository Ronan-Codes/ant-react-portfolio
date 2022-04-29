import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
