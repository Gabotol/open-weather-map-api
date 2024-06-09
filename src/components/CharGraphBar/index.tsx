import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartOptions } from 'chart.js';
import { colorsGraphs } from '../../constants/colors';
import { formatDate, getNameState } from '../../helpers/charts';

// Register the necessary chart components
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Define the prop types for the component
interface BarChartComponentProps {
  data: Array<{
    lat: number;
    lon: number;
    dates: Array<{ date: string; value: number }>;
  }> | null;
  parameter: string;
  title: string;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data, parameter, title }) => {
  if (!data) return null;

  const datasets = data.map((item, index) => ({
    label: getNameState(item.lat, item.lon),
    data: item.dates.map(dateItem => dateItem.value),
    backgroundColor: colorsGraphs[index],
    borderColor: colorsGraphs[index],
    borderWidth: 1,
  }));

  const chartData = {
    labels: data[0]?.dates?.map(dateItem => formatDate(dateItem.date)),
    datasets,
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Dates',
          color: 'black',
          font: {
            weight: 'bold',
          },
        },
        ticks: {
          color: 'black',
          font: {
            weight: 'bold',
          },
        },
      },
      y: {
        title: {
          display: true,
          text: parameter,
          color: 'black',
          font: {
            weight: 'bold',
          },
        },
        ticks: {
          color: 'black',
          font: {
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: title,
        color: 'black',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  };

  return <Bar data-testid="chart-component" data={chartData} options={options} />;
};

export default BarChartComponent;
