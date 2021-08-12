import React from "react";
import {
  AboutSection,
  AboutTop,
  AboutHeader,
  AboutContainer,
  AboutLeft,
  AboutRight,
  AboutButton
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
          <AboutLeft>
            <p>
              We are a team of Designers and Developers ready to make your
              Digital Dream a business reality. Get together with us today make your idea a reality. So Dream Big make it Big  
            </p>
            <AboutButton>
            <a href="/" class="primary-btn">Contact Us</a>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                </a>
            </AboutButton>
          </AboutLeft>
          <AboutRight>
            <img src="/images/aboutImg.png" alt="About" />
          </AboutRight>
        </AboutContainer>
      </AboutSection>
    </>
  );
}

export default About;
