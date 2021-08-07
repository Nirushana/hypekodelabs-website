import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  padding: 10px 40px;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 820px){
    display: none;
  }
`;

export const NavItem = styled.li`
  display: inline-flex;

  a {
    position: relative;
    padding: 16px 0 5px;
    margin: 0 25px;
    color: #f9f9f9;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Audiowide", sans-serif;
    font-size: 16px;
  }

  a:hover {
    color: tomato;
    transition: 0.12s;
  }

  a:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scale(0);
    -webkit-transform: translateX(-505) scale(0);
    transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    width: 100%;
    height: 2px;
    background-color: #c7ad18;
    transition: transform 250ms;
    -webkit-transition: transform 250ms;
  }

  a:hover:after {
    transform: translateX(-50%) scaleX(1);
    -webkit-transform: translateX(-50%) scaleX(1);
  }
`;

export const Logo = styled.div`
  color: #f9f9f9;
  padding: 16px 0 5px;
  font-family: "Audiowide", sans-serif;
  font-size: 20px;
`;

export const Nav = styled.nav``;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 820px){
    display: block;
    font-size: 32px;
    margin-right: 5px;
    margin-top: 10px;
    color: #f9f9f9;
  }
  


`;
