import React, { useState } from "react";
import { Container } from "../styled-components/Global/Global.styled";
import NavBar from "../components/NavBar";
import Start from "../components/start";

const StartPage: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <Container>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Start darkMode={darkMode} />
    </Container>
  );
};

export default StartPage;
