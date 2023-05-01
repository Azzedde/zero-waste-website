import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Concerns from './components/Concerns';
import Footer from './components/Footer';
import Concerns2 from './components/Concerns2';
import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';


function App() {
  return (
    <BrowserRouter>
    <div >
      <Link to="/#home"></Link>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Concerns />
      <Concerns2 />
      <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
