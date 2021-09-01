import React from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

const QuizExplanations = styled.div`
  max-width: 750px;
  min-width: 400px;
  height: 100%;
  /* max-height: 500px; */
  flex-grow : 1;
  padding: 10px;
  padding: 0 25px 0px 25px;
  line-height: 1.3;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  font-size: 14px;
  z-index: 10;
  border-radius: ${({ theme }) => theme.borderRadius};

  h2 {
    width: 100%;
    font-size: 14px;
    font-weight: normal;
    padding: 15px;
    border-top-left-radius: ${({ theme }) => theme.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    
  }
  .explanations {
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: rgb(255 255 255 / 100%);
    color: black;
    box-shadow: 0px 0px 12px rgb(20 0 0 / 30%);
    height: -webkit-fill-available;
    padding: 0;
    height: 100%;
  }
  .explanations--hidden {
    p, h2, span, a {
      color: transparent;
    }
  }
  .explanations__content {
    padding: 10px 20px 10px 20px;
  }

  @media screen and (max-width: 1215px) {
    p, h2 {
    font-size: 15px;
    }
  } 
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    min-width: 500px;
  }
  @media screen and (max-width: 768px) {
    min-width: calc(100% - 60px);
    flex-direction: column;
    padding: 0;
    margin: 10px 30px;
  }
  @media screen and (max-width: 767px) {
    min-width: calc(100% - 20px);
    min-height: 500px;
    margin: 10px;
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    p, h2 {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 321px) {
    p {
      font-size: 11px;
    }
  }
 
`;
QuizExplanations.Carousel = styled.div`
  width: 100%;
  height: 100%;
  min-width: 700px;
  position: relative;
  margin: 30px auto;
  display: flex;
  flex-direction:column;
  
  .input-container {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    min-width: 100%;
    flex-direction: column;
  }
`;

export default QuizExplanations;
