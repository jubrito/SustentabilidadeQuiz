import styled from 'styled-components';

const FooterBox = styled.footer`
  position: absolute;
  bottom:0vh;
  margin-top: 20px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  /* border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius}; */
  text-align: center;
  z-index: 11;
  p,a,a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  p {
    margin: 5px;
    padding: 5px;
    font-size: 10px;
    font-family: 'Ubuntu', sans-serif;
  }
`;

export default FooterBox;
