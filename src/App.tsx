import React from 'react';
import './App.scss';
import { Hero } from './components/Hero/Hero';
import { Menu } from './components/Menu/Menu';
import { Services } from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';
import { AgencyServices } from './components/AgencyServices/AgencyServices';
import { GetStarted } from './components/GetStarted/GetStarted';
import { Company } from './components/Company/Company';
import { Footer } from './components/Footer/Footer';
import { Test } from './components/Test/Test';

function App() {
  return (
    <div className="App">
      <Test />
      <Menu />
      <Hero />
      <Services />
      <Portfolio />
      <AgencyServices />
      <GetStarted />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
