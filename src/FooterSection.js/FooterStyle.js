import styled from "styled-components";

export const Footer = styled.footer`
  background: #111;
  height: auto;
  width: 100%;
  font-family: sans-serif;
  padding-top: 30px;
  color: #fff;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
  }

  p {
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 18px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 1rem 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a i {
    font-size: 1.5rem;
    transition: color 0.4s ease;
  }

  a:hover {
    color: aqua;
  }
`;

export const FooterBottom = styled.div`
  background: #000;
  width: 100%;
  padding: 20px 0;
  text-align: center;

  p {
    font-size: 16px;
    word-spacing: 2px;
    text-transform: capitalize;
  }

  span {
    text-transform: uppercase;
    opacity: 0.4;
    font-weight: 200;
  }
`;
