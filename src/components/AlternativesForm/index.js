import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    font-size: 15px;
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
        color: black;
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media
`;

export default AlternativesForm;
