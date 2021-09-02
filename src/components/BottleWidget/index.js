import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import animationData2 from '../../screens/Quiz/animations/floatingbottle.json';
import Lottie from 'react-lottie';

const BottleWidgetContent = styled.div`

  svg {
    transform: scale(1);
  }
  @media (max-width:1024px){ 
    svg {
      transform: scale(0.2) !important;
    }
  }
`

export default function BottleWidget({isStopped}) {
  const [windowWidth, setWindowWidth] = useState();
  const [width, setWidth] = useState('10%');
  const [height, setHeight] = useState('auto');
  const [bottom, setBottom] = useState('unset');
  const [top, setTop] = useState(140);
  const [right, setRight] = useState(140);
  const [left, setLeft] = useState('unset');
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
      setWidth('100%');
      setHeight('72%');
      setTop('unset');
      setBottom('110px');
      setLeft('unset');
      setRight('260px');
    }
    if (windowWidth <= 768) {
      setWidth('80%');
      setHeight('75%');
      setRight('39%');
      setTop('23%');
    }
    if (windowWidth <= 767) {
      setWidth('80%');
      setHeight('400px');
      setTop('unset');
      setRight('49%');
      setBottom('20px');
    }
    if (windowWidth <= 414) {
      setBottom('0');
    }
  }, [windowWidth]);

  return (
    <BottleWidgetContent>
      <div>
        <Lottie
          options={defaultOptions}
          direction={animationState.direction}
          height={height}
          speed={isStopped ? 0 : 0.2}
          width={width}
          style={{
            position: 'absolute',
            top: top,
            bottom: bottom,
            right: right,
            left: left,
            zIndex: -1
          }}
        />
      </div>
    </BottleWidgetContent>
  );
}