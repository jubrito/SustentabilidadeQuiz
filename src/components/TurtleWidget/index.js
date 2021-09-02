import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import animationData2 from '../../screens/Quiz/animations/turtle.json';
import Lottie from 'react-lottie';

const TurtleWidgetContent = styled.div`
`

export default function TurtleWidget({isStopped}) {
  const [windowWidth, setWindowWidth] = useState();
  const [width, setWidth] = useState('50%');
  const [height, setHeight] = useState('100%');
  const [bottom, setBottom] = useState(0);
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);
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
  useEffect(() => {
    if (windowWidth <= 1024) {
      setWidth('80%');
      setHeight('30%');
      setBottom('unset');
      setTop('50%');
      setRight('0');
    }
    if (windowWidth <= 768) {
      setRight(0);
    }
    if (windowWidth <= 414) {
      setHeight('500px');
      setTop('unset');
      setBottom(0);
    }
    if (windowWidth <= 375) {
      setHeight('400px');
    }
  }, [windowWidth]);

  return (
    <TurtleWidgetContent>
      <Lottie
        options={defaultOptions}
        direction={animationState.direction}
        height={height}
        speed={isStopped ? 0 : 0.1}
        width={width}
        style={{
          position: 'absolute',
          bottom: bottom,
          top: top,
          right: right,
          zIndex: -1
        }}
      />
    </TurtleWidgetContent>
  );
}