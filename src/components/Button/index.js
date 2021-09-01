import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 1px 3px 2px 0px rgb(0 255 255);
  text-shadow: 1px 3px 4px blue;
	/* background:linear-gradient(to bottom, black 5%, #c62d1f 100%); */
  font-family: 'Ubuntu', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  outline: 0;
  transition: .3s;
  margin-top: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    /* background-color: darken(${({ theme }) => theme.colors.secondary}, 10%); */
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &:disabled {
    background-color:#646464;
    cursor: not-allowed;
    box-shadow: none;
    text-shadow: none;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;