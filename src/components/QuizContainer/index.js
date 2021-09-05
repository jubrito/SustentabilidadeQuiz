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
  @media screen and (max-width: 1024px) {
    margin: auto 7%;
    min-width: 400px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    min-height: 1024px;
    width: 100%;
    min-width: min-content;
    max-width: calc(100% - 60px);
    padding-top: 15px;
  }
  @media screen and (max-width: 320px) {
    max-width: calc(100% - 30px);
  }
  @media screen and (max-width: 280px) {
    min-width: auto;
    min-height: 100%;
  }

  z-index: 10;
`;

export default QuizContainer;
