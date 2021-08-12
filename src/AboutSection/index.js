import React from "react";
import {
  AboutSection,
  AboutTop,
  AboutHeader,
  AboutContainer,
  AboutLeft,
  AboutRight
} from "./AboutStyle";

function About() {
  return (
    <>
      <AboutSection>
        <AboutTop>
          <AboutHeader>
            <h2 class="float_header">About Us</h2>
            <h3>About Us</h3>
          </AboutHeader>
        </AboutTop>
        <AboutContainer>
          <AboutLeft></AboutLeft>
          <AboutRight></AboutRight>
        </AboutContainer>
      </AboutSection>
    </>
  );
}

export default About;
