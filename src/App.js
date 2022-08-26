import './App.css';
import { useState } from 'react'
import Header from './Header';
import Nav from './Nav';
import CompLeft from './CompLeft';
import CompRight from './CompRight';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div class="container mt-5">
        <div class="row">
          <CompLeft />
          <CompRight />
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default App;
