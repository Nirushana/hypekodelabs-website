import React from "react";
import { Bars, Nav, NavList, NavItem, Wrapper, Logo } from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <>
      <Wrapper>
        <Logo>HypeKodeLabs</Logo>
        <Nav>
          <Bars onClick={toggle} />
          <NavList>
            <NavItem>
              <a href="/home">Home</a>
            </NavItem>
            <NavItem>
              <a href="/services">Services</a>
            </NavItem>
            <NavItem>
              <a href="/About">About</a>
            </NavItem>
            <NavItem>
              <a href="/pricing">Pricing</a>
            </NavItem>
            <NavItem>
              <a href="/contact">Contact</a>
            </NavItem>
          </NavList>
        </Nav>
      </Wrapper>
    </>
  );
}

export default Navbar;
