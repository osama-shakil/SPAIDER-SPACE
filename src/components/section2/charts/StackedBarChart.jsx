// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const StackedBarChart = () => {
//   const data = {
//     labels: ['RW222', 'arcsec', 'W45E', 'Reaction Wheel 60', 'LIBRA-2', 'RW400', 'Trillian-1', 'WHL-500', 'CubeWheel Medium'],
//     datasets: [
//       {
//         label: 'Length',
//         data: [25, 40, 258, null, 70, 50, 135, 97, 46],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         stack: 'Stack 0'
//       },
//       {
//         label: 'Width',
//         data: [25, 40, 181, 65.6, 150, 50, 135, 97, 46],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         stack: 'Stack 1'
//       },
//       {
//         label: 'Height',
//         data: [15, 28.9, 143, 44.8, 150, 27, 82, 40, 31.5],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         stack: 'Stack 2'
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.dataset.label}: ${context.raw}`
//         }
//       }
//     },
//     scales: {
//       x: {
//         stacked: true
//       },
//       y: {
//         stacked: true
//       }
//     }
//   };

//   return <Bar data={data} options={options} />;
// };

// export default StackedBarChart;
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = () => {
  const data = {
    labels: ['RW222', 'arcsec', 'W45E', 'Reaction Wheel 60', 'LIBRA-2', 'RW400', 'Trillian-1', 'WHL-500', 'CubeWheel Medium'],
    datasets: [
      {
        label: 'Length',
        data: [25, 40, 258, null, 70, 50, 135, 97, 46],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Adjusted opacity
        borderColor: 'rgba(255, 99, 132, 1)', // Added border color
        borderWidth: 1, // Added border width
        stack: 'Stack 0'
      },
      {
        label: 'Width',
        data: [25, 40, 181, 65.6, 150, 50, 135, 97, 46],
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Adjusted opacity
        borderColor: 'rgba(54, 162, 235, 1)', // Added border color
        borderWidth: 1, // Added border width
        stack: 'Stack 1'
      },
      {
        label: 'Height',
        data: [15, 28.9, 143, 44.8, 150, 27, 82, 40, 31.5],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Adjusted opacity
        borderColor: 'rgba(75, 192, 192, 1)', // Added border color
        borderWidth: 1, // Added border width
        stack: 'Stack 2'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 16 // Increased font size
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`
        },
        bodyFont: {
          size: 14 // Increased font size for tooltip
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 14 // Increased font size for x-axis labels
          }
        }
      },
      y: {
        stacked: true,
        ticks: {
          font: {
            size: 14 // Increased font size for y-axis labels
          }
        }
      }
    },
    animation: {
      duration: 1000 // Adjust animation duration
    }
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
