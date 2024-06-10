import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import HomeView from '../views/HomeView';
import Start from 'src/components/start';

const HomePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [start, setStart] = useState(true)

  return (
    <>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      {start ? <Start darkMode={darkMode} setStart={setStart} /> :
      <HomeView darkMode={darkMode} />}
    </>
  );
};

export default HomePage;
