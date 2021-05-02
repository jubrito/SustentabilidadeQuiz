import React from 'react';
import styled from 'styled-components';

const ProgressBarDefault = styled.div`
  margin-top: 10px; 

  #progress-bar-container {
    width: 100%;
    height: 25px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 35px;
    overflow: hidden;
    background-color: #e8e8e8;
    &::after{
      content: "";
      position: absolute; 
      width: ${(props) => (props.result+"%")};
      /* width: 100%; */
      height: 100%;
      top: 0;
      right: 0;
      background-color: #e8e8e8;
    }
  }

  .progress-bar-child {
    width: 100%;
    height: 100%;
  }

  .progress {
    color: white;
    text-align: center;
    line-height: 75px;
    font-size: 35px;
    font-family: "Segoe UI";
    animation-direction: reverse;
    background: #e5405e;

    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #e5405e 0%, #ffdb3a 45%, #3fffa2 100%);
  }

  .shrinker {
    background-color: #e8e8e8;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }

  .timelapse {
    animation-name: timelapse;
    animation-fill-mode: forwards;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(.86, .05, .4, .96);
  }

  @keyframes timelapse {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;


export default function ProgressBar({ result }) {
  console.log(result)
  return (
    <ProgressBarDefault result={result}>
      <div id="progress-bar-container">
        <div class="progress-bar-child progress"></div>
        <div class="progress-bar-child shrinker timelapse"></div>
      </div>
    </ProgressBarDefault>
  );
}

