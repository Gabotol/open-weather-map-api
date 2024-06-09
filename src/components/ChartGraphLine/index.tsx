import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend, ChartOptions } from 'chart.js';
import { colorsGraphs } from '../../constants/colors';
import { formatDate, getNameState } from '../../helpers/charts';

Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

interface ChartComponentProps {
  data: Array<{
    lat: number;
    lon: number;
    dates: Array<{ date: string; value: number }>;
  }> | null;
  parameter: string;
  title: string;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data, parameter, title }) => {
  if (!data) return null;

  let dates: { label: string; data: number[]; fill: boolean; backgroundColor: string; borderColor: string }[] = [];
  data?.forEach((item, index) => {
    dates.push({
      label: getNameState(item?.lat, item?.lon),
      data: item?.dates?.map(item => item?.value) || [],
      fill: false,
      backgroundColor: colorsGraphs[index],
      borderColor: colorsGraphs[index],
    });
  });

  const chartData = {
    labels: data[0]?.dates?.map((data, index) => formatDate(data?.date)) || [],
    datasets: dates,
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Dates',
          color: 'black', // Color de la etiqueta del eje X
          font: {
            weight: 'bold', // Poner en negritas
          },
        },
        ticks: {
          color: 'black', // Color de las etiquetas de los ticks del eje X
          font: {
            weight: 'bold', // Poner en negritas
          },
        },
      },
      y: {
        title: {
          display: true,
          text: parameter,
          color: 'black', // Color de la etiqueta del eje Y
          font: {
            weight: 'bold', // Poner en negritas
          },
        },
        ticks: {
          color: 'black', // Color de las etiquetas de los ticks del eje Y
          font: {
            weight: 'bold', // Poner en negritas
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: title, // Título de la gráfica
        color: 'black',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  };

  return <Line data-testid="chart-component" data={chartData} options={options} />;
};

export default ChartComponent;
