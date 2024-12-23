import React from 'react';
import { Bar as ChartBar } from 'react-chartjs-2'; // Renamed Bar import to avoid conflict
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import DataLabels from 'chartjs-plugin-datalabels'; // Renamed import to avoid conflict
import { ChartsHeader } from '../../components';
import { barCustomSeries, barPrimaryXAxis } from '../../data/dummy';

// Register the necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DataLabels); // Registered with new name

const BarChart = () => {
  // Create chart data
  const chartData = {
    labels: barPrimaryXAxis, // X-axis labels (Olympic countries or events)
    datasets: barCustomSeries.map((item) => ({
      label: item.name,
      data: item.data, // Data for each series
      backgroundColor: item.backgroundColor, // Bar color
      borderColor: item.borderColor, // Border color for the bars
      borderWidth: 1,
    })),
  };

  // Chart options for customization
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Countries/Events', // X-axis title
        },
      },
      y: {
        title: {
          display: true,
          text: 'Medals Count', // Y-axis title
        },
        beginAtZero: true, // Ensure the Y-axis starts from 0
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 20, // Customize the legend box size
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
      datalabels: {
        color: 'white', // Customize the data labels' text color
        anchor: 'end',  // Anchor the label to the end of the bars
        align: 'top',   // Align the labels at the top of the bars
      },
    },
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <ChartBar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default BarChart;




