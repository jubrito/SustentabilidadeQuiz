import styled from 'styled-components';

const QuizBackground = styled.div`
  transition: 0.3s;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  height: 110vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  flex: 1;
  z-index: 1;
  // Ipad Pro
  @media screen and (max-width: 1024px) and (max-height: 1366px) {
    /* height: calc(100%); */
  }
  // Ipad
  // Iphone
  @media screen and (max-width: 376px) {
    min-height: 160vh;
  }
`;

export default QuizBackground;
