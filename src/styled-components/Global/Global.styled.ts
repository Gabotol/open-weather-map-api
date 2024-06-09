import styled, { css } from 'styled-components';

export const FilterLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

export const Container = styled.div`
  @media (max-width: 1159px) {
    width: 100%;
  }
`;