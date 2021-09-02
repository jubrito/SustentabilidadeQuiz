import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// import animationData2 from '../../screens/Quiz/animations/small-waves.json';
import animationData2 from '../../screens/Quiz/animations/fullscreenwaves.json';
import Lottie from 'react-lottie';

const SeaWidgetContent = styled.div`
  width: ${(props) => (props.type == 'radio' ? 'unset' : '100%')};
  background-color: ${(props) => (props.isStopped ? 'black' : 'transparent')};
`

export default function SeaWidget({ width, isStopped }) {
  const [windowWidth, setWindowWidth] = useState();
  const [animationState, setAnimationState] = useState({
    isStopped: isStopped, isPaused: false,
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
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  })
  return (
    <SeaWidgetContent>
      <Lottie
        options={defaultOptions}
        direction={animationState.direction}
        height= '100%'
        speed={isStopped ? 0 : 0.1}
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