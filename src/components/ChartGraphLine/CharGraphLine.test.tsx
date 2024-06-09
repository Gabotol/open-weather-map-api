import React from 'react';
import { render } from '@testing-library/react';
import ChartComponent from './index';

describe('ChartComponentLine', () => {
  test('renders chart component with provided data', () => {
    // Mock data
    const data = [
      {
        lat: 1,
        lon: 1,
        dates: [
          { date: '2024-01-01', value: 100 },
          { date: '2024-01-02', value: 150 },
          { date: '2024-01-03', value: 200 },
        ],
      },
      {
        lat: 2,
        lon: 2,
        dates: [
          { date: '2024-01-01', value: 200 },
          { date: '2024-01-02', value: 250 },
          { date: '2024-01-03', value: 300 },
        ],
      },
    ];

    // Render the component
    const { getByTestId } = render(
      <ChartComponent data={data} parameter="Parameter" title="Title" />
    );

    // Assert that the chart component is rendered
    const chartComponent = getByTestId('chart-component');
    expect(chartComponent).toBeInTheDocument();

    // You can add more assertions here if needed
  });
});
