import styled, { keyframes } from 'styled-components';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const fadeIn = keyframes`
  0%   {opacity: 1;}
  25%   {opacity: 0.8;}
  50%   {opacity: 0.7;}
  75%   {opacity: 0.6;}
  100%  {opacity: 0.5;}
`;

const fadeOut = keyframes`
  0%   {opacity: 0.5;}
  25%   {opacity: 0.6;}
  50%   {opacity: 0.7;}
  75%   {opacity: 0.8;}
  100%  {opacity: 1;}
`;

const QuizLogo = styled(Logo)`
  display: flex;
  justify-content: center;
  padding: 0 14px;
  margin-top: 5px;
  max-width: 450px;
  min-height: 120px;
  animation: ${({color}) => color === 'white' ? fadeIn : fadeOut} 2s linear;
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
function Logo({ logoShouldBeWhite, ...props }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    let color;
    if (logoShouldBeWhite) {
      color = 'white';
    } else {
      color = 'black';
    }
    const source = `./logo-title-aqua-${color}.png`;
    setSrc(source);
  }, [logoShouldBeWhite])
  return (
    <QuizLogo {...props}>
      <div>
        <Link href="/">
        <img src={src} alt="Voltar ao inicio" title="Voltar ao inicio"/>
        </Link>
      </div>
    </QuizLogo>
  );
}

Logo.propTypes = {
  // className: PropTypes.string.isRequired,
};

export default Logo;
