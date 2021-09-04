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
  box-shadow: 2px 3px 2px 0px rgb(0 255 255);

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
  @media screen and (max-width: 280px) {
    font-size: 13px;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;