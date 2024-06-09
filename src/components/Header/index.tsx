import { Title } from '../../styled-components/Header/Header.styled';
import React from 'react';

const Header: React.FC = ({darkMode}) => {

  return (
    <>
      <Title darkMode={darkMode} large>
        Comparador del clima
        </Title>
       <Title darkMode={darkMode}>De las capitales de México</Title>
    </>
  );
};

export default Header;
