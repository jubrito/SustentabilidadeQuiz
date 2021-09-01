import styled from 'styled-components';

const Widget = styled.div`
  /* margin-top: 24px; */
  flex-grow : 1;
  margin-bottom: 24px;
  background-color:rgb(255 255 255 / 100%);
  border-radius: 4px;
  overflow: hidden;
  z-index: 21;
  height: 100%;
  min-width: 450px;
  max-width: 450px;
  min-height: 470px;
  box-shadow: 0px 0px 12px rgb(20 0 0 / 30%);

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  @media screen and (max-width: 1024px) {
    min-width: 400px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: min-content;
    max-width: calc(100% - 60px);
    height: auto;
    min-height: unset;
    padding: 0;
    margin: 10px 30px;
  }
  @media screen and (max-width: 767px) {
    min-width: calc(100% - 20px);
    margin: 10px;
  }
  // Surface Duo
  @media screen and (max-width: 540px) {
    /* min-height: 500px; */
  }
`;
Widget.Content = styled.div`
  padding: 14px;
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
  @media screen and (max-width: 1023px) {
    padding: 22px;
  }
  @media screen and (max-width: 767px) {
    padding: 14px;
  }
`;

Widget.Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  h1 {
    color: ${({ theme }) => theme.colors.white}; 
  }

  * {
    margin: 0;
  }
  // Ipad
  @media screen and (max-width: 1023px) {
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
  justify-content: center;
  text-align: center;
  
  &:hover,
  &:focus {
    opacity: .9;
  }
  input {
    position: absolute;
    opacity: 0;
    width: 0;
  }
  @media screen and (max-width: 767px) {
    padding: 14px;
  }
`;

export default Widget;
