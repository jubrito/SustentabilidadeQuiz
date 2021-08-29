import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// import animationData2 from '../../screens/Quiz/animations/small-waves.json';
import animationData2 from '../../screens/Quiz/animations/fullscreenwaves.json';
import Lottie from 'react-lottie';

const SeaWidgetContent = styled.div`
 &:after{
   content: '';
   position: absolute;
   width: 300%;
   height: 100%;
    background-color: black;
    opacity: 0.5;
    top: 0;
    right: 0;
 }
`

export default function SeaWidget({ width, height, bottom, innerHeight, innerWidth, ...props }) {
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
    <SeaWidgetContent>
      <Lottie
        options={defaultOptions}
        direction={animationState.direction}
        height= '100%'
        speed={0.1}
        width={width}
        style={{
          position: 'absolute',
          bottom: '2px',
          zIndex: -1
        }}
      />
    </SeaWidgetContent>
  );
}