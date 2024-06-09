import styled, { css } from 'styled-components';
import bgDay from '../../assets/images/bg-day.jpg';
import bgNight from '../../assets/images/bg-night.jpg';


export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: auto;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  background-color: ${(props) => (props.darkMode ? 'rgb(17 27 98)' : 'rgb(181 226 255)')};
  transition: all 0.5s ease;
  padding: 10px 0px;
  position: relative;
  z-index: 3;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 90%;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
`;

export const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 10px;
`;

export const ToggleIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const Background = styled.div`
  background-image: ${(props) => `url(${props.darkMode ? bgNight : bgDay})`};
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 81%;
  margin: 0 8%;
  @media (max-width: 1159px) {
     width: 90%;
     margin: 0 5%;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 1159px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ChartsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  padding: 40px, 40px;
  height: auto;
  position: relative;
  margin-bottom: 150px;
`;
