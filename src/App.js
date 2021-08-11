import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './HeroSection'
import { GlobalStyle } from "./GlobaleStyles";
import Services from './ServiceSection';
import About from './AboutSection';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Services />
      <About />
    </Router>
  );
}

export default App;
