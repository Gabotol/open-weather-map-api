import React from 'react';
import DayMode from '../../assets/icons/day-mode.svg';
import NightMode from '../../assets/icons/night-mode.svg';
import { Header, HeaderContent, Logo, ToggleButton, ToggleIcon } from '../../styled-components/Nav/Navbar.styled';


interface NavBarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, setDarkMode }) => {
  return (
      <Header darkMode={darkMode}>
        <HeaderContent>
          <Logo src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="openweathermap" />
          <ToggleButton onClick={() => setDarkMode(!darkMode)}>
            <ToggleIcon src={darkMode ? DayMode : NightMode} alt="mode" />
          </ToggleButton>
        </HeaderContent>
      </Header>
    );
};

export default NavBar;
