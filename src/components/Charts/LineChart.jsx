import React from 'react';
import { Line } from 'react-chartjs-2';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales in USD',
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: '420px', backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
