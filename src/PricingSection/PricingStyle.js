import styled from "styled-components";

export const PricingSection = styled.section`
  width: 100%;
  height: 900px;
  background-color: #150f0f;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
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

export const PricingTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  width: min(1500px, 100%);
`;

export const PricingCard = styled.div`
    flex: 1;
    max-width: 320px;
    background: #fff;
    margin: 20px 10px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    color: #2d2d2d;
    transition: .3s linear;

    .pricing-card-header{
      background: #c7ad18;
      display: inline-block; 
      color: #fff;
      padding: 12px 30px;
      border-radius: 0 0 20px 20px;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 600;
      transition: .4s linear;
    }

    &:hover .pricing-card-header{
      box-shadow: 0 0 0 26em #c7ad18;
    } 

    .price{
      font-size: 60px;
      color: #c7ad18;
      margin: 40px 0;
      transition: .2s linear;
    }

    .price sup, .price span{
      font-size: 22px;
      font-weight: 700;
    }

    &:hover , &:hover .price{
      color: #fff;
    }

    li{
    font-size: 16px;
    padding: 10px 0;
    text-transform: uppercase;
}

.order-btn{
    display: inline-block;
    margin-bottom: 40px;
    margin-top: 80px;
    border: 2px solid #c7ad18;
    color: #c7ad18;
    padding: 18px 40px;
    border-radius: 8px;
    font-weight: 500;
    transition: .3s linear;
    text-decoration: none;
}

.order-btn:hover{
    background-color: #c7ad18;
    color: #fff;
}

@media screen and (max-width: 1100px) {
        flex: 50%;
}

`


