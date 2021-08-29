import React from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 400px;
  max-height: fit-content;
  padding-top: 15px;
  margin: auto 10%;
  position: relative;
  @media screen and (max-width: 1215px) {
    max-width: 320px;
    margin: auto 10%;
    p, h2 {
    font-size: 14px;
    }
  }
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    margin: auto 7%;
    transform: translateY(20%);
  }
  // Ipad
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    max-width: 620px;
    transform: translateY(10%);
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    max-width: 450px;
    transform: translateY(6%);
  }
  // Iphone Plus
  @media screen and (max-width: 415px) {
    max-width: 85%;
  }
  // Iphone
  @media screen and (max-width: 376px) {
    transform: translateY(0%);
  }
  z-index: 10;
`;

export default QuizContainer;
