import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import HomeView from '../views/HomeView';

const HomePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HomeView darkMode={darkMode} />
    </>
  );
};

export default HomePage;
