import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['5', '9', '11', '13', '15', '17', '19', '21'],
  datasets: [
    {
      label: 'Activity',
      data: [5000, 10000, 7500, 15000, 10000, 20000, 15000, 25000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      type: 'category',
    },
  },
};

function ActivityChart() {
  return (
    <div className="activity-chart">
      <Bar data={data} options={options} />
    </div>
  );
}

export default ActivityChart;
