import styled from "styled-components";

export const PricingSection = styled.section`
  width: 100%;
  height: 900px;
  background-color: #150f0f;
`;

export const PricingTop = styled.div`
  position: relative;
`;

export const PricingHeader = styled.div`
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
