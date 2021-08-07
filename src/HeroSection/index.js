import React, { useState } from "react";
import { HeroSection, HeroContainer, HeroContent, HeroH, HeroP, HeroBtn } from "./HeroStyle";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroSection>
      <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroH>We are HypeKodeLab</HeroH>
        <HeroP>
          A team ready to deliver you project from designing to end product with
          quality and care. Along with social media marketing strategies to help
          develop your business further.
        </HeroP>
        <HeroBtn>Get Started</HeroBtn>
      </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
