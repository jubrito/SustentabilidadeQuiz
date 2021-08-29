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

export default function BottleWidget( innerHeight, innerWidth) {
  const [width, setWidth] = useState('10%');
  const [height, setHeight] = useState('auto');
  const [bottom, setBottom] = useState('unset');
  const [top, setTop] = useState(140);
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
      setHeight('100%');
      // setBottom('unset');
      // setTop('50%')
    }
    if (window.innerWidth <= 380) {
      setWidth('auto');
      setHeight('11%');
      setTop('unset');
      setBottom(460);
    }
  }, []);

  return (
    <BottleWidgetContent>
      <div>
        <Lottie
          options={defaultOptions}
          direction={animationState.direction}
          height={height}
          speed={0.3}
          width={width}
          style={{
            position: 'absolute',
            top: top,
            bottom: bottom,
            right: '30%',
            zIndex: -1
          }}
        />
      </div>
    </BottleWidgetContent>
  );
}