import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import animationData2 from '../../screens/Quiz/animations/turtle.json';
import Lottie from 'react-lottie';


export default function TurtleWidget() {
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false,
    direction: 1,
  });

  const defaultOptions = {
    loop: true, 
    autoplay: true, // false não carrega a animação quando recarrega
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
      <Lottie
        options={defaultOptions}
        direction={animationState.direction}
        height= '100%'
        speed={0.1}
        width='40%'
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: -1
        }}
      />
  );
}