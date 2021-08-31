import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import animationData2 from '../../screens/Quiz/animations/turtle.json';
import Lottie from 'react-lottie';

const TurtleWidgetContent = styled.div`
`

export default function TurtleWidget(innerHeight, innerWidth) {
  const [width, setWidth] = useState('40%');
  const [height, setHeight] = useState('100%');
  const [bottom, setBottom] = useState(0);
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);
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

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setWidth('100%');
      setHeight('30%');
      setBottom('unset');
      setTop('50%');
      setRight('-20%');
    }
    if (window.innerWidth <= 375) {
      setWidth('100%');
      setHeight('49%');
      setBottom(0);
    }
  }, []);

  // useEffect(() => {
  //   setAnimationState({
  //     ...animationState,
  //     isStopped: !animationState.isStopped, // o contrário do que tiver
  //   })
  // }, []);
  // const reverseAnimation = -1;
  // const normalAnimation = 1;
  // useEffect(() => {
  //   setAnimationState({
  //     ...animationState,
  //     isStopped: false,
  //     direction: animationState.direction === normalAnimation 
  //     ? reverseAnimation 
  //     : normalAnimation,
  //   })
  // }, []);

  return (
    <TurtleWidgetContent>
      <Lottie
        options={defaultOptions}
        direction={animationState.direction}
        height={height}
        speed={0.1}
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