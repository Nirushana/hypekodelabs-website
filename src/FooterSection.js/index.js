import React from "react";
import { Footer, FooterContent, FooterBottom } from "./FooterStyle";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

function FooterSection() {
  return (
    <Footer>
      <FooterContent>
        <h3>HypeKodeLabs</h3>
        <p>
          Professional Web and Mobile application development agency, Phone: +94
          76 1317 667, +94 78 1440 028
        </p>
        <ul>
          <li>
            <a href="/">
              <FaFacebookF color="#fff" size="24px" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaInstagram color="#fff" size="24px" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedin color="#fff" size="24px" />
            </a>
          </li>
          <li>
            <a href="/">
              <FaYoutube color="#fff" size="24px" />
            </a>
          </li>
        </ul>
      </FooterContent>
      <FooterBottom>
        <p>copyright &copy;2021 HypeKodeLabs</p>
      </FooterBottom>
    </Footer>
  );
}

export default FooterSection;
