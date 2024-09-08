import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['RW222', 'arcsec', 'RW250B', 'LIBRA-2', 'RW150', 'RW40', 'RW250', 'RW1000', 'RW5', 'CubeWheel Medium'],
    datasets: [
      {
        label: 'Peak Power',
        data: [5.0, 0.6, 90, null, 75, 100, 120, 160, 27, 2.3],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false
      },
      {
        label: 'Avg Power',
        data: [1.7, 0.2, 25, 4.8, 8, 7.5, 10, 15, 6.5, 0.19],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Reaction Wheels'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Power'
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
