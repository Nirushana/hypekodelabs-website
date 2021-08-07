import React, { useState } from "react";
import { HeroSection } from "./HeroStyle";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar'

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroSection>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </HeroSection>
  );
}

export default Hero;
