import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Start from './index';

test('renders start component with correct text', () => {
  const darkMode = false;

  const { getByText } = render(
    <MemoryRouter>
      <Start darkMode={darkMode} />
    </MemoryRouter>
  );

  expect(getByText(/Comparador del clima/i)).toBeInTheDocument();
  expect(getByText(/De las capitales de México/i)).toBeInTheDocument();
  expect(getByText(/Completa todos los filtros para comenzar a ver las gráficas/i)).toBeInTheDocument();
  expect(getByText(/Empezemos/i)).toBeInTheDocument();
});

test('clicking start button navigates to home page', () => {
  const darkMode = false;
  const navigate = jest.fn();

  const { getByText } = render(
    <MemoryRouter>
      <Start darkMode={darkMode} />
    </MemoryRouter>
  );

  const startButton = getByText(/Empezemos/i);
  fireEvent.click(startButton);

  expect(window.location.pathname).toBe('/');
});
