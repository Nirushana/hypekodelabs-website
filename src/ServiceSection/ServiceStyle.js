import styled from "styled-components";

export const ServiceContainer = styled.div`
  width: 100%;
  min-height: 900px;
  background: #150f0f;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const ServiceTop = styled.div`
  position: relative;

`;

export const ServiceHeader = styled.div`
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
      font-size: 50px;
      color: #fff;
      border-bottom: 3px solid #f9f9f9;
    }
  }
`;

export const ServiceBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ServiceContent = styled.div`
  text-align: center;
  max-width: 1450px;
  margin: auto;
  padding: 20px;
`;

export const Service = styled.div`
  display: inline-block;
  width: calc(100% / 3);
  margin: 2px -2px;
  padding: 35px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #333;
    transform: scale(1.1);
    border-radius: 10px;
  }

  h2 {
    color: #f9f9f9;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: 2px;
  }

  p {
    letter-spacing: 1.5px;
    color: #ffe0e0;
    font-size: 14px;
    line-height: 25px;
    font-weight: bold;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const Row = styled.div`
  text-align: center;
  max-width: 1450px;
  margin: auto;
  padding: 40px;
  color: #f9f9f9;
`;

export const SubService = styled.ul`
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 20px;
`;

export const Item = styled.li`
  width: calc(23% - 50px);
  margin: 20px 35px;
  padding: 10px 0;
  border-bottom: 2px solid rgba(245, 245, 245, 0.4);
  float: left;
  list-style: none;
  transition: 1s;

  &:hover {
    transform: scale(1.1);
    border-bottom: 2px solid #c7ad18;
    color: #c7ad18;
  }

  @media screen and (max-width: 1155px) {
    width: 40%;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
    margin-left: 20px;
  }
`;
