import React from 'react';
import styled from 'styled-components';
import { arrGraphs } from '../../constants/filters';
import { Container, FilterLabel } from '../../styled-components/Global/Global.styled';
import { Checkbox, CheckboxLabel } from '../../styled-components/FilterGraphs/FilterGraphs.styled';

interface FilterGraphsComponentProps {
  setFiltersGraphs: React.Dispatch<React.SetStateAction<string[]>>;
  darkMode: boolean;
}


const FilterGraphsComponent: React.FC<FilterGraphsComponentProps> = ({ setFiltersGraphs, darkMode }) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFiltersGraphs((prevSelectedGraphs) => {
      if (prevSelectedGraphs.includes(value)) {
        // Remove the selected graph if it's already selected
        return prevSelectedGraphs.filter((graph) => graph !== value);
      } else {
        // Add the selected graph to the array
        return [...prevSelectedGraphs, value];
      }
    });
  };

  return (
    <Container>
      <FilterLabel darkMode={darkMode} htmlFor="1" aria-label="Select currency">
        Selecciona las graficas que quieres ver:
      </FilterLabel>
      {arrGraphs.map((data, index) => (
        <div key={index}>
          <Checkbox
            type="checkbox"
            id={`${index}`}
            name="currency"
            value={data.value}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel darkMode={darkMode} htmlFor={`${index}`}>
            {data.nameFilter}
          </CheckboxLabel>
        </div>
      ))}
    </Container>
  );
};

export default FilterGraphsComponent;
