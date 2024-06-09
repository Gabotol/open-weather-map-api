import styled from 'styled-components';

export const Title = styled.div`
  margin-bottom: ${(props) => (props.large ? '0px' : '20px')}; 
  margin-top: ${(props) => (props.large ? '20px' : '0px')}; 
  font-size: ${(props) => (props.large ? '40px' : '20px')};
  font-weight: bold;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
`;
