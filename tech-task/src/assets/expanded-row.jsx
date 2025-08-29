import React, { useState } from 'react';
import { Bar, Radar } from 'react-chartjs-2';

// Import all of the Chart.js options
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

// CH: Register the Chart.js components so that they will display
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

// CH function for label formatting to remove underscores from graph labels and capitalise 
const formatLabel = (label) => {
  return label
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// CH: Expanding content within the table, containing the chart.js charts
function ExpandedRowContent({ row }) {
  const [chartType, setChartType] = useState('bar');

  const formattedLabels = row.datatypeScores.map((ds) => formatLabel(ds.id));
  const scores = row.datatypeScores.map((ds) => ds.score);

  // CH: Set chart formatting
  const chartData = {
    labels: formattedLabels,
    datasets: [
      {
        label: 'Scores',
        data: scores,
        backgroundColor: chartType === 'bar' ? 'rgba(54, 162, 235, 0.6)' : 'rgba(75, 192, 192, 0.4)',
        borderColor: chartType === 'bar' ? 'rgba(54, 162, 235, 1)' : 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ],
    
  };

  // CH: Set chart options for legend, title and scales
  const chartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: `Data Type Scores: ${row.target.approvedSymbol} and lung carcinoma`,
        },
        legend: {
            display: false,
        }
    },
    scales: chartType === 'bar' ? {
      y: {
        beginAtZero: true,
        max: 1,
      },
    } : {},
  };

  // CH Charts which are set to display onClick depending on tab selected
  return (
    <div className="expanded-content">
      <div className="tab-bar">
        <button
          className={chartType === 'bar' ? 'active' : ''}
          onClick={() => setChartType('bar')}>
          Bar Chart
        </button>
        <button
          className={chartType === 'radar' ? 'active' : ''}
          onClick={() => setChartType('radar')}>
          Radar Chart
        </button>
      </div>
      <div className="chart-container">
        {chartType === 'bar' ? (
            <Bar data={chartData} options={chartOptions} />
            ) : (
            <Radar data={chartData} options={chartOptions} />
            )}
      </div>
    </div>
  );
}

export default ExpandedRowContent;