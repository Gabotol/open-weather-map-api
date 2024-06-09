import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterGraphsComponent from './index';

test('renders filter graphs component with correct text', () => {
  const setFiltersGraphs = jest.fn();
  const darkMode = false;

  const { getByLabelText } = render(
    <FilterGraphsComponent setFiltersGraphs={setFiltersGraphs} darkMode={darkMode} />
  );

  const filterLabel = getByLabelText(/Selecciona las graficas que quieres ver:/i);
  expect(filterLabel).toBeInTheDocument();

});

