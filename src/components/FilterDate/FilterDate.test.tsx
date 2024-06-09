import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterDate from './index';

test('renders filter date component with correct text', () => {
  const setSelectedDate = jest.fn();
  const selectedDate = '2024-06-10';
  const darkMode = false;
  const label = 'Date Label';

  const { getByLabelText } = render(
    <FilterDate label={label} setSelectedDate={setSelectedDate} selectedDate={selectedDate} darkMode={darkMode} />
  );

  const filterLabel = getByLabelText(/Escoge una fecha a partir del día de hoy:/i);
  expect(filterLabel).toBeInTheDocument();

});

