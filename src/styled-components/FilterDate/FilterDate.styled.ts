import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label<{ darkMode: boolean }>`
  font-size: 20px;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;

export const DateInput = styled.input<{ darkMode: boolean }>`
  font-family: 'Kumbh Sans', sans-serif;
  background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  border: 1px solid blue;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  @media (max-width: 1159px) {
    width: 190px;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  width: 90%;

  @media (max-width: 1159px) {
    width: 100%;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 0px 10px;
  
  @media (max-width: 1159px) {
    margin: 0px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;