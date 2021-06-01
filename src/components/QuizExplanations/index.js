import React from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

const QuizExplanations = styled.div`
  /* background-image: ${({ imgs }) => imgs.sea};  */
  /* background-image: url('./sea.jpg');  */
  /* background-size: contain; */
  /* background-repeat: no-repeat; */
  /* background-color: ${({ theme }) => theme.colors.sand}; */
  height: 100%;
  width: 540px;
  padding: 10px;
  padding: 0 25px 0px 25px;
  line-height: 1.3;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 50%;
  /* transform: translateY(-50%); */
  border: 0;
  left: 100%;
  font-size: 14px;
  z-index: 10;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 700px;
  transform:translateX(15%) translateY(-50%) translateZ(0px);

  .explanations {
    background-color: rgb(254, 254, 254, 0.6);
    box-shadow: -13px -3px 12px rgb(20 0 0 / 30%);
    padding: 10px 20px 10px 20px;
    height: -webkit-fill-available;
  }

  @media screen and (max-width: 1400px) {
    width: 590px;
  } 
  @media screen and (max-width: 1215px) {
    width: 500px;
    p, h2 {
    font-size: 15px;
    }
  } 
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    .explanations {
      background-color: rgb(254,254,254,0.7);
    }
    padding:0;
    transform:translateX(14%) translateY(-100%) translateZ(0px);
  }
  // Ipad
  @media screen and (max-width: 768px) {
    .explanations {
      background-color: rgb(254,254,254,0.5);
      box-shadow: 0px -5px 12px rgb(20 0 0 / 30%);
    }
    transform: translateX(-100%) translateY(65%) translateZ(0px);
    width: 100%;
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    transform: translateX(-100%) translateY(0%) translateZ(0px);
    min-height: 300px;
    .explanations {
      min-height: 670px;
      }
    position: relative;
    p, h2 {
      font-size: 13px;
    }
  }
  // Iphone Plus
  @media screen and (max-width: 415px) {
    .explanations {
      box-shadow: 0px 0px 12px rgb(20 0 0 / 30%);
      height: max-content;
    }
  }
  // Iphone
  @media screen and (max-width: 376px) {
    transform: translateX(-100%) translateY(11%) translateZ(0px);
  }
  // Moto G4 / Galaxy S5
  @media screen and (max-width: 361px) {
    .explanations {
      min-height: 600px;
    }
  }
  // Iphone SE
  @media screen and (max-width: 321px) {
    transform: translateX(-100%) translateY(0%) translateZ(0px);
    p {
      font-size: 11px;
    }
  }
  // Galaxy Fold
  @media screen and (max-width: 280px) {
    .explanations {
      min-height: 640px;
    }
  }
  /* @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  } */
`;
QuizExplanations.Carousel = styled.div`
  position: relative;
  margin: 30px auto;
  height: auto;
  display: flex;
  flex-direction:column;
  justify-content: center;
  
  .input-container {
    width: 100%;
  }
  @media(max-width: 600px) {
    flex-direction: column;
  }
`;

export default QuizExplanations;
