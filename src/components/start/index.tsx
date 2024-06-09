import {
  StartButton,
  StartOverlay,
  StartText,
  SubContainer,
} from "../../styled-components/start/Start.styled";
import React from "react";
import { useNavigate } from "react-router-dom";

interface StartProps {
  darkMode: boolean;
}

const Start: React.FC<StartProps> = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <StartOverlay darkMode={darkMode}>
      <SubContainer>
        <StartText darkMode={darkMode} large>
          Comparador del clima
        </StartText>
        <StartText darkMode={darkMode}>De las capitales de México</StartText>
        <StartText darkMode={darkMode}>
          Completa todos los filtros para comenzar a ver las gráficas
        </StartText>
        <StartButton darkMode={darkMode} onClick={() => navigate("/home")}>
          Empezemos
        </StartButton>
      </SubContainer>
    </StartOverlay>
  );
};

export default Start;
