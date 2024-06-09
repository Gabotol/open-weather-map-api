import {
  Container,
  DateInput,
  FilterRow,
  FilterSection,
} from "../../styled-components/FilterDate/FilterDate.styled";
import { FilterLabel } from "../../styled-components/Global/Global.styled";
import React from "react";

interface FilterDateProps {
  label: string;
  setSelectedDate: (date: string) => void;
  selectedDate: string;
  darkMode: boolean;
}

const FilterDate: React.FC<FilterDateProps> = ({
  label,
  setSelectedDate,
  selectedDate,
  darkMode,
}) => {
  return (
    <Container>
      <FilterSection>
        <FilterRow>
          <FilterLabel
            darkMode={darkMode}
            htmlFor="currency"
            aria-label="Select currency"
            for="date"
          >
            Escoge una fecha a partir del día de hoy:
          </FilterLabel>
          <DateInput
            darkMode={darkMode}
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </FilterRow>
      </FilterSection>
    </Container>
  );
};

export default FilterDate;
