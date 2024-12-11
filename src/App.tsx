import React from 'react';
import './App.scss';
import { Menu } from './components/Menu/Menu';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import { Work } from './components/Work/Work';
import { CompanyServices } from './components/CompanyServices/CompanyServices';
import { GetStarted } from './components/GetStarted/GetStarted';
import { LogoButton } from './components/LogoButton/LogoButton';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <Services />
      <Work />
      <CompanyServices />
      <GetStarted />
      <LogoButton />
      <Footer />
    </div>
  );
}

export default App;
