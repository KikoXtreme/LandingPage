import React from 'react';
import './App.scss';
import { Hero } from './components/Hero/Hero';
import { Menu } from './components/Menu/Menu';
import { Services } from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';
import { AgencyServices } from './components/AgencyServices/AgencyServices';
import { GetStarted } from './components/GetStarted/GetStarted';
import { LogoButton } from './components/LogoButton/LogoButton';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <Services />
      <Portfolio />
      <AgencyServices />
      <GetStarted />
      <LogoButton />
      <Footer />
    </div>
  );
}

export default App;
