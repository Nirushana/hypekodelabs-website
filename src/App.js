import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './HeroSection'
import { GlobalStyle } from "./GlobaleStyles";
import Service from './ServiceSection';
import About from './AboutSection';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Service />
      <About />
    </Router>
  );
}

export default App;
