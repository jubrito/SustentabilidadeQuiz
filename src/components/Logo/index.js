import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

const LogoDefault = styled(Logo)`
  position: absolute;
  right: 60px;
  top: 10px;

  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
  // Ipad
  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

function Logo({  }) {
  return (
    // <LogoDefault>
    <>
      <img src="./logo_black.png" alt="Voltar ao inicio" title="Voltar ao inicio"/>
      {/* <img src="./logo_dark.png" alt="Voltar ao inicio" title="Voltar ao inicio"/> */}
    </>
    // </LogoDefault>
  );
}

export default Logo;
