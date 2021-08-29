import styled from 'styled-components';

const QuizBackground = styled.div`
  transition: 0.3s;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  min-height: 110vh;
  position: relative;
  flex: 1;
  z-index: 1;
  // Ipad Pro
  @media screen and (max-width: 1024px) {
    background-position: top;
  }
  // Ipad
  @media screen and (max-width: 768px) {
    background-image: url(${({ backgroundImageResponsive }) => backgroundImageResponsive});
  }
  // Iphone
  @media screen and (max-width: 376px) {
    min-height: 160vh;
  }
`;

export default QuizBackground;
