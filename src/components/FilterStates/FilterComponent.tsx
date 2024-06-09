import React from 'react';
import styled from 'styled-components';
import { arrCapitalCities } from '../../constants/filters';
import { getNameStateSelect } from '../../helpers/charts';
import { colorsGraphs } from '../../constants/colors';
import close from '../../assets/icons/close.svg';

interface FilterComponentProps {
  handleFilterChange: React.Dispatch<React.SetStateAction<string[]>>;
  darkMode: boolean;
  filterStateBase: string[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;

  @media (max-width: 1159px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const Label = styled.label<{ darkMode: boolean }>`
  font-size: 20px;
  font-weight: bold;
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
`;

const Select = styled.select<{ darkMode: boolean }>`
  background-color: ${({ darkMode }) => (darkMode ? 'black' : 'white')};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  border: 1px solid blue;
  border-radius: 5px;
  padding: 5px;
  font-family: 'Kumbh Sans', sans-serif;
  cursor: pointer;

  @media (max-width: 1159px) {
    width: 200px;
  }
`;

const SelectedCitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
  width: 90%;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1159px) {
    flex-direction: row;
    align-items: flex-start;
      justify-content: flex-start;
    width: 100%;
  }
`;

const CityBadge = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  padding: 5px;
  position: relative;
  font-family: 'Kumbh Sans', sans-serif;
`;

const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  top: -10px;
  right: -10px;
  border: 1px solid black;
  height: 10px;
  width: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 15px;
    height: 15px;
  }
`;

const FilterComponent: React.FC<FilterComponentProps> = ({ handleFilterChange, darkMode, filterStateBase }) => {
  return (
    <Container>
      <Label darkMode={darkMode} htmlFor="currency" aria-label="Select currency">
        Selecciona las capitales a comparar:
      </Label>
      <Select
        darkMode={darkMode}
        id="currency"
        onChange={(e) => handleFilterChange((prevSelectedGraphs) => {
          if (prevSelectedGraphs.includes(e.target.value)) {
            return [...prevSelectedGraphs];
          } else {
            if (prevSelectedGraphs.length < 5) {
              return [...prevSelectedGraphs, e.target.value];
            } else {
              return [...prevSelectedGraphs];
            }
          }
        })}
        aria-label="Currency selection"
      >
        <option value={0} disabled selected>Selecciona una capital</option>
        {arrCapitalCities.map((city, index) => (
          <option key={index} value={`${city.lat},${city.lon}`}>
            {city.nameState}({city.capital})
          </option>
        ))}
      </Select>
      <SelectedCitiesContainer>
        {filterStateBase.map((city, index) => (
          <CityBadge key={index} bgColor={colorsGraphs[index]}>
            <CloseButton
              data-testid="button-close"
              onClick={() => handleFilterChange((prevSelectedGraphs) =>
                prevSelectedGraphs.filter((citySelected) => citySelected !== city)
              )}
            >
              <img src={close} alt="x" />
            </CloseButton>
            {getNameStateSelect(city)}
          </CityBadge>
        ))}
      </SelectedCitiesContainer>
    </Container>
  );
};

export default FilterComponent;
