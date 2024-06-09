import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterComponent from './FilterComponent';

test('renders filter component with correct initial state', () => {
  const handleFilterChange = jest.fn();
  const darkMode = false;
  const filterStateBase = [];
  
  const { getByLabelText, getByText, getByRole, getByTestId } = render(
    <FilterComponent handleFilterChange={handleFilterChange} darkMode={darkMode} filterStateBase={filterStateBase} />
  );
  
  const selectElement = getByLabelText(/Selecciona las capitales a comparar:/i);
  expect(selectElement).toBeInTheDocument();
  
});

test('selects a city and removes it from the filter', () => {
  const handleFilterChange = jest.fn();
  const darkMode = false;
  const filterStateBase = [];

  const { getByLabelText, getByText, getByRole, getByTestId } = render(
    <FilterComponent handleFilterChange={handleFilterChange} darkMode={darkMode} filterStateBase={filterStateBase} />
  );
  
  const selectElement = getByLabelText(/Selecciona las capitales a comparar:/i);
  fireEvent.change(selectElement, { target: { value: '19.4326,-99.1332' } });
  
});
