import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Hero';
import { GlobalStyle } from "./GlobaleStyles";
import Service from "./Service";
import About from './About';

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
