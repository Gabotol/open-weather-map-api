import styled from 'styled-components';

export const Modal = styled.div`
  display: ${(props) => (props.openModal ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  background-color: ${(props) => (props.darkMode ? 'rgb(17 27 98)' : 'rgb(181 226 255)')};
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  margin-top: 10px;
`;