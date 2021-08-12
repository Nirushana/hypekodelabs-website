import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;
  height: 900px;
  background: #150f0f;
  color: #f9f9f9;

  @media only screen and (max-width: 768px) {
    height: 1300px;
  }
`;

export const AboutTop = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
    margin-top: -4rem;
  }
`;

export const AboutHeader = styled.div`
  padding: 90px;
  .float_header {
    font-size: 150px;
    font-weight: bolder;
    position: absolute;
    opacity: 0.1;
    top: 20px;
    left: 20px;
    width: 1500px;
    z-index: 10;
    overflow: hidden;
    color: #f9f9f9;
  }

  h3 {
    width: 100%;
    font-size: 70px;
    color: #fff;
    border-bottom: 3px solid #f9f9f9;
  }

  @media (max-width: 450px) {
    .float_header {
      font-size: 150px;
      font-weight: bolder;
      position: absolute;
      opacity: 0.1;
      top: 0px;
      left: 0px;
      width: 350px;
      z-index: 10;
      overflow: hidden;
      color: #f9f9f9;
    }

    h3 {
      width: 100%;
      font-size: 40px;
      color: #fff;
      border-bottom: 3px solid #f9f9f9;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  width: 90%;
  height: 100%;
  margin: 0 auto;
  max-width: 1100px;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const AboutLeft = styled.div`
  flex: 6;

  p {
    margin-top: 2.5rem;
    max-width: 480px;
    font-size: 1.8rem;
    line-height: 38px;
    color: #f9f9f9;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 0;
    flex: 1;
    height: fit-content;

    p {
      margin: 0 auto;
      font-size: 1rem;
      margin-top: -8rem;
    }
  }
`;

export const AboutRight = styled.div`
  flex: 8;
  text-align: right;

  img {
    width: 100%;
    max-width: 550px;
    height: 600px;
    object-fit: cover;
    object-position: 50% 30%;
    border-radius: 12px;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    flex: 1;
    margin-bottom: 1rem;
    margin-top: 10rem;

    img {
      width: 90%;
      height: 400px;
    }
  }
`;

export const AboutButton = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  .primary-btn {
    display: inline-block;
    border: 2px solid #c7ad18;
    color: white;
    font-size: 1.2rem;
    padding: 0.6em 1.6em;
    border-radius: 50px;
    text-decoration: none;
    transition: ease-in-out 0.4s;
  }

  .primary-btn:hover {
    background-color: #c7ad18;
    transform: scale(1.1);
  }

  svg {
    width: 55px;
    color: #c7ad18;
    transition: 0.4s;
  }

  svg:hover {
    transform: scale(1.2);
  }

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
