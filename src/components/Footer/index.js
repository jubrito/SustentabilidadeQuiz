import styled from 'styled-components';

const FooterBox = styled.footer`
  position: absolute;
  bottom:-11vh;
  margin-top: 20px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  /* border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius}; */
  text-align: center;
  z-index: -1;
  p,a,a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  p {
    margin: 5px;
    padding: 5px;
    font-size: 10px;
  }
  // Ipad Pro
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    bottom: 0;
  }
  div {
    left: 0px;
    /* // Tv
    @media screen and (min-width: 1236px) and (max-width: 1024px) {
      height: 350px !important;
      bottom
    } */
    // Ipad Pro
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      height: 650px !important;
    }
    // Ipad
    @media screen and (min-width: 521px) and (max-width: 768px) {
      height: 200px !important;
      bottom: 30px !important;
    }
    // Surface Duo
    @media screen and (min-width: 516px) and (max-width: 540px) {
      bottom: 28px !important;
      height: 120px !important;
    }
    // Iphone Plus
    @media screen and (min-width: 411px) and (max-width: 515px) {
      bottom: 42px !important;
      height: 220px !important;
    }
    /* // Iphone X
    @media screen and (min-width: 376px) and (max-width: 410px) {
      bottom: 42px !important;
      height: 360px !important;
    } */
    @media screen and (min-width: 377px) and (max-width: 410px) {
      bottom: 42px !important;
      height: 170px !important;
    }
    // Iphone
    @media screen and (min-width: 361px) and (max-width: 376px) {
      bottom: 41px !important;
      height: 250px !important;
    }
    // Motog4
    @media screen and (min-width: 320px) and (max-width: 360px) {
      bottom: 42px !important;
      height: 170px !important;
    }
    // Iphone SE
    @media screen and (min-width: 280px) and (max-width: 320px) {
      bottom: 42px !important;
      height: 300px !important;
    }
    // Galaxy fold & motog4
    @media screen and (min-width: 280px) and (max-width: 319px) {
      bottom: 42px !important;
      height: 140px !important;
    }
  }
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    bottom: -10vh;
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    font-size: 12px;
    padding: 0 5px;
    bottom: -190px;
  }
  // Iphone
  @media screen and (max-width: 376px) {

  }
  // Iphone SE
  @media screen and (max-width: 376px) {

  }
`;

export default FooterBox;
