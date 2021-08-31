import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  position: relative;
  flex: 1;
  z-index: 1;
  opacity: 1;
  transition: all 1000s linear;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transition: background 1000s linear;
    background: black;
    pointer-events: none;
    top: 0;
    left: 0;
    transition : opacity 0.5;
    -webkit-animation: fadein 1000s linear forwards;
    animation: fadein 1000s linear forwards;
    opacity: ${({isHomepage}) => (setTimeout(() => {isHomepage ? 0.4 : 0}), 3000)};

    opacity: ${({isHomepage}) => (isHomepage ? 0.4 : 0)};
  }

  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;

export default QuizBackground;
