import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
	position: relative;
  width: 100%;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
	line-height: 1rem;
	font-size: 16px;
  font-family: 'Ubuntu',sans-serif;
	font-weight: 700;
  color: white;
  text-decoration: none;
  background-color: black;
  overflow: hidden;
  transition: 0.5s transform ease-in-out;
  will-change: transform;
  z-index: 0;
  /* box-shadow: 1px 3px 2px -1px rgb(0 0 0 / 80%); */
  box-shadow: 2px 3px 2px 0px rgb(0 255 255);
  /* text-shadow: 1px 3px 4px rgb(0 255 255); */

  &::after {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    color: black;
    transform: translate(-100%, 0);
    transform-origin: top left;
    transition: 0.4s transform ease-out;
    will-change: transform;
    z-index: -1;
  }
  &:hover::after{
    transform: translate(0, 0);
  }
  &:hover, &:focus {
    color: white;
    will-change: transform;
    transition: 0.6s transform ease-out;
    box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 50%);
  }
  &:disabled {
    background-color:#646464;
    cursor: not-allowed;
    box-shadow: none;
    text-shadow: none;
  }
  &:disabled::after {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 94%;
    bottom: 22px;
  }
`;

// const Button = styled.button`
//   background-color: ${({ theme }) => theme.colors.black};
//   /* text-shadow: 1px 3px 4px blue; */
// 	/* background:linear-gradient(to bottom, black 5%, #c62d1f 100%); */
//   font-family: 'Ubuntu', sans-serif;
//   color: ${({ theme }) => theme.colors.white};
//   border-radius: ${({ theme }) => theme.borderRadius};
//   border: 0;
//   width: 100%;
//   padding: 10px 16px;
//   font-weight: bold;
//   font-size: 14px;
//   line-height: 1;
//   outline: 0;
//   transition: .3s;
//   margin-top: 10px;
//   cursor: pointer;
//   &:hover {
//     box-shadow: 1px 3px 2px -1px rgb(0 0 0 / 80%);
//   }
//   &:focus {
//     /* background-color: darken(${({ theme }) => theme.colors.secondary}, 10%); */
//     background-color: ${({ theme }) => theme.colors.secondary};
//   }
//   &:disabled {
//     background-color:#646464;
//     cursor: not-allowed;
//     box-shadow: none;
//     text-shadow: none;
//   }
// `;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;