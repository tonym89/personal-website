import React, {Component} from 'react';
import logo from './logo.svg';
import mainPhoto from './mainPhoto.jpg';
import './App.css';
import './index.css'
import './assets/cards.css'
import MainPhotoSection from './components/mainPhotoSection';
import About from './components/about';
import Portfolio from './components/portfolio';
import Technologies from './components/technologies';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
        <MainPhotoSection/>
        <About />
        <Portfolio />
        <Contact />
    </div>
  );
}

export default App;
