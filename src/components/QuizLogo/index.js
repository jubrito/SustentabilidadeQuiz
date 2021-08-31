import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const QuizLogo = styled(Logo)`
  display: flex;
  justify-content: center;
  padding: 0 14px;
  margin-top: 5px;
  max-width: 450px;
  /* max-width: 450px; */
  img{
    @media screen and (max-width: 1350px) {
      max-width: 320px;
    }
  }

  div {
    display: flex;
    justify-content: center;
  }
`;
function Logo(props) {
  return (
    <QuizLogo {...props}>
      <div>
        <Link href="/">
        <img src="./logo-title-black-white.png" alt="Voltar ao inicio" title="Voltar ao inicio"/>
        {/* <img src="./logo_black.png" alt="Voltar ao inicio" title="Voltar ao inicio"/> */}
        {/* <img src="./logo_dark.png" alt="Voltar ao inicio" title="Voltar ao inicio"/> */}
        </Link>
      </div>
    </QuizLogo>
  );
}

Logo.propTypes = {
  // className: PropTypes.string.isRequired,
};

export default Logo;
