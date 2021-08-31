import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const QuizLogo = styled(Logo)`

  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
  margin: auto;
  margin-top: 30px;
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    transform: translateY(-30px) translateZ(0px) !important;
  }
  // Ipad
  @media screen and (max-width: 768px) {
    transform: translateY(0px) translateZ(0px) !important;
  }
  img{
    @media screen and (max-width: 1350px) {
      max-width: 320px;
    }
    // Ipad Pro
    @media screen and (max-width: 1024px) {
      margin-top: 0px;
    }
    // Ipad
    @media screen and (max-width: 768px) {
      max-width: unset;
    }
    // Surface Duo
    @media screen and (max-width: 541px) {
      max-width: 450px;
    }
    // Iphone Plus
    @media screen and (max-width: 415px) {
      max-width: 97%;
      
      /* margin-top: 30px; */
    }
    // Iphone
    @media screen and (max-width: 376px) {
      margin-top: 30px;
      margin-bottom: 10px;
      /* margin-top: 0; */
    }
    // Moto G4 / Galaxy S5
    @media screen and (max-width: 361px) {
    }
    // Iphone SE
    @media screen and (max-width: 321px) {
    }
  }
`;
function Logo(props) {
  return (
    <QuizLogo {...props}>
      <Link href="/">
      <img src="./logo-title-black-white.png" alt="Voltar ao inicio" title="Voltar ao inicio"/>
      {/* <img src="./logo_black.png" alt="Voltar ao inicio" title="Voltar ao inicio"/> */}
      {/* <img src="./logo_dark.png" alt="Voltar ao inicio" title="Voltar ao inicio"/> */}
      </Link>
    </QuizLogo>
  );
}

Logo.propTypes = {
  // className: PropTypes.string.isRequired,
};

export default Logo;
