import styled from 'styled-components';

export const StartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.darkMode ? 'rgb(17 27 98)' : 'rgb(181 226 255)')};
  height: 100vh;
  z-index: 2;
  transition: all 0.5s ease;
  width: 100%;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: 0 5%;`;


export const StartText = styled.div`
  margin: 20px 0px;
  font-size: ${(props) => (props.large ? '80px' : '20px')};
  font-weight: bold;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
    @media (max-width: 1159px) {
      font-size: ${(props) => (props.large ? '50px' : '20px')};
  }
`;

export const StartButton = styled.button`
  color: #d6a30f;
  font-size: 20px;
  font-weight: bold;
  background-color: ${(props) => (props.darkMode ? 'rgb(17 27 98)' : 'rgb(181 226 255)')};
  border: 2px solid ${(props) => (props.darkMode ? 'rgb(181 226 255)' : 'rgb(17 27 98)')};
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 40px;
`;