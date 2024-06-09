import styled from 'styled-components';

export const CheckboxLabel = styled.label<{ darkMode: boolean }>`
  font-size: 20px;
  font-weight: normal;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
  background-color: blue;
  cursor: pointer;
`;