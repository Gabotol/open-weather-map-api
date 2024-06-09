import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

test('renders header with correct text', () => {
  const { getByText } = render(<Header darkMode={false} />);
  const title1 = getByText(/Comparador del clima/i);
  const title2 = getByText(/De las capitales de México/i);
  
  expect(title1).toBeInTheDocument();
  expect(title2).toBeInTheDocument();
});

test('renders header with dark mode correctly', () => {
  const { getByText } = render(<Header darkMode={true} />);
  const title1 = getByText(/Comparador del clima/i);
  const title2 = getByText(/De las capitales de México/i);
  
  expect(title1).toBeInTheDocument();
  expect(title2).toBeInTheDocument();
});
