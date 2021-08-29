import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import animationData2 from '../../screens/Quiz/animations/floatingbottle.json';
import Lottie from 'react-lottie';

const BottleWidgetContent = styled.div`
`

export default function BottleWidget() {
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
    <BottleWidgetContent>
      <div>
        <Lottie
          options={defaultOptions}
          direction={animationState.direction}
          height= 'auto'
          speed={0.1}
          width='10%'
          style={{
            position: 'absolute',
            top: 140,
            right: '30%',
            zIndex: -1
          }}
        />
      </div>
    </BottleWidgetContent>
  );
}