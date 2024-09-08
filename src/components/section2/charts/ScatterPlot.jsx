import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ScatterPlot = () => {
  const data = {
    datasets: [
      {
        label: 'Mass vs Max Momentum Storage',
        data: [
          { x: 215, y: 15 },
          { x: 2.6, y: 4.0 },
          { x: 1.5, y: 1.5 },
          { x: 8.5, y: 25 },
          { x: 0.27, y: 0.06 },
          { x: 21.8, y: 50 },
          { x: 2.8, y: 1.47 },
          { x: 1.55, y: 0.65 },
          { x: 0.15, y: 0.01082 }
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
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
          label: (context) => `Mass: ${context.raw.x}, Max Momentum Storage: ${context.raw.y}`
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Mass'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Max Momentum Storage'
        }
      }
    }
  };

  return <Scatter data={data} options={options} />;
};

export default ScatterPlot;
