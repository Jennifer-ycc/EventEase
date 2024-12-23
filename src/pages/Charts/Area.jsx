import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartsHeader } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'; // Ensure areaPrimaryYAxis is correct

// Register required chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Area = () => {
  // Create chart data
  const chartData = {
    labels: areaPrimaryXAxis, // X-axis data
    datasets: areaCustomSeries.map((item) => ({
      label: item.name,
      data: item.data, // Y-axis data
      fill: true, // Area chart effect
      borderColor: item.borderColor, // Line color
      backgroundColor: item.backgroundColor, // Fill color
      tension: 0.4, // Smoothness of the line
    })),
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'category', // Use categorical data for the X-axis
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: areaPrimaryYAxis, // Use areaPrimaryYAxis for Y-axis configuration
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    elements: {
      point: {
        radius: 0, // Hides data points (optional)
      },
    },
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Area" title="Inflation Rate in percentage" />
      <div className="w-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Area;
