import styled from "styled-components";


export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
`;
export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)),
    url("/images/heroImg.jpg");
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  
`;

export const HeroContent = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #f9f9f9;
  font-weight: bold;
`;

export const BgImg = styled.div`
  height: 100%;
`;

export const HeroH = styled.h1`
  font-size: 4em;
  margin-bottom: 12px;

  @media (max-width: 450px){
    font-size: 2.5em;
  }
`;
export const HeroP = styled.p`
  /* color: hsla(0, 0%, 93.5%m 1); */
  font-size: 16px;
  margin: 0 0 24px;
  line-height: 2;
  letter-spacing: 2px;

  @media (max-width: 450px){
    font-size: 12px;
  }
`;

export const HeroBtn = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 40px;
  border: 2px solid #c7ad18;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c7ad18;
  }

  @media (max-width: 450px){
    padding: 10px 30px;
  }
`;