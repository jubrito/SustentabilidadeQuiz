import React from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  max-height: fit-content;
  padding-top: 30px;
  margin: auto 10%;
  position: relative;
  @media screen and (max-height: 710px) {
    padding-top: 1px;
  }
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
    min-width: 400px;
  }
  // Ipad
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    min-height: 700px;
    width: 100%;
    min-width: min-content;
    max-width: calc(100% - 60px);
    padding-top: 15px;
  }

  z-index: 10;
`;

export default QuizContainer;
