import React, { useEffect, useState } from 'react';
import animationData2 from '../../screens/Quiz/animations/small-waves.json';
import Lottie from 'react-lottie';

// const Button = styled.button`
//   background-color: ${({ theme }) => theme.colors.tertiary};
//   color: ${({ theme }) => theme.colors.white};
//   border-radius: ${({ theme }) => theme.borderRadius};
//   border: 0;
//   width: 100%;
//   padding: 10px 16px;
//   font-weight: bold;
//   font-size: 14px;
//   line-height: 1;
//   text-transform: uppercase;
//   outline: 0;
//   transition: .3s;
//   margin-top: 10px;
//   cursor: pointer;
//   &:hover,
//   &:focus {
//     background-color: darken(${({ theme }) => theme.colors.secondary}, 10%);
//   }
//   &:disabled {
//     background-color:#646464;
//     cursor: not-allowed;
//   }
// `;
// height: 300px;

export default function SeaWidget({ width, height, bottom, innerHeight, innerWidth, ...props }) {
  // Se tiver um botão por exemplo pra fazer a animação ocorrer teria que ser assim
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
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false,
    direction: 1,
  });
  const [lottieHeight, setLottieHeight] = useState(height);
  const [lottieBottom, setLottieBottom] = useState(bottom);
  useEffect(() => {
    if (innerHeight<=800 && innerWidth <= 1024) {
      setLottieHeight('110px');
      setLottieBottom('28px');
    } else if(innerHeight>=1080) {
      setLottieHeight('310px');
      setLottieBottom('28px');
    }
  }, [innerHeight]);

  const defaultOptions = {
    loop: true, // false não roda em loop infinito
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
      height={lottieHeight}
      width={width}
      style={{
        position: 'absolute',
        bottom: lottieBottom,
        zIndex: 9
      }}
    />
  );
}