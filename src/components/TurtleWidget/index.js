import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';

import animationData2 from '../../screens/Quiz/animations/turtle.json';
import UseWindowSize from '../UseWindowSize';

const TurtleWidgetContent = styled.div`
 * {
   transition: opacity 1000ms ease-in-out;
 }
`

export default function TurtleWidget({isStopped}) {
  const windowSize = UseWindowSize();
  const [windowWidth, setWindowWidth] = useState();
  const [width, setWidth] = useState('0');
  const [height, setHeight] = useState('100%');
  const [bottom, setBottom] = useState(0);
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);
  const [opacity, setOpacity] = useState('0');
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
    setWindowWidth(windowSize.width);
  }, [windowSize.width]);
  useEffect(() => {
    if (!isStopped) {
      setTimeout(() => {
        setOpacity(1);
      }, 500)
    } 
  },[]);
  useEffect(() => {
    if (windowWidth > 1024) {
      setWidth('50%');
    }
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
          zIndex: -1,
          opacity: opacity,
        }}
      />
    </TurtleWidgetContent>
  );
}