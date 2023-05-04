import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Sponsors from './Sponsors/Sponsors.js';

const App = () => {
  return (
    <>
    <header>
      <Navbar />
      <div className='spacer'/>
    </header>
    <Routes>
      <Route path='/sponsors' element={<Sponsors />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;