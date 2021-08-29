import styled from 'styled-components';

const Widget = styled.div`
  /* margin-top: 24px; */
  margin-bottom: 24px;
  background-color:rgb(255 255 255 / 75%);
  border-radius: 4px;
  overflow: hidden;
  z-index: 21;
  min-height: 450px;
  box-shadow: 0px 0px 12px rgb(20 0 0 / 30%);

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    min-height: 500px;
  }
`;
Widget.Content = styled.div`
  padding: 32px;
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  position: relative;
  // Ipad
  @media screen and (max-width: 768px) {
    padding: 22px;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  h1 {
    color: ${({ theme }) => theme.colors.white}; 
  }

  * {
    margin: 0;
  }
  // Ipad
  @media screen and (max-width: 768px) {
    padding: 15px 22px;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: flex;
  align-items: center;
  
  &:hover,
  &:focus {
    opacity: .9;
  }
`;

export default Widget;
