// "use client";
// import { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const RadarChart = () => {
//   const data = [
//     {
//       name: "RW222",
//       mass: 215,
//       maxTorque: 2,
//       peakPower: 5.0,
//       maxMomentumStorage: 15
//     },
//     {
//       name: "W45E",
//       mass: 2.6,
//       maxTorque: 0.2,
//       peakPower: 48,
//       maxMomentumStorage: 4.0
//     },
//     {
//       name: "RW250B",
//       mass: 8.5,
//       maxTorque: 75,
//       peakPower: 90,
//       maxMomentumStorage: 25
//     },
//     {
//       name: "CubeWheel Medium",
//       mass: 0.15,
//       maxTorque: 1,
//       peakPower: 2.3,
//       maxMomentumStorage: 0.01082
//     }
//   ];

//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (!chartRef.current) return;

//     const ctx = chartRef.current.getContext('2d');

//     const labels = ['Mass', 'Max Torque', 'Peak Power', 'Max Momentum Storage'];
//     const datasets = data.map(wheel => ({
//       label: wheel.name,
//       data: [wheel.mass, wheel.maxTorque, wheel.peakPower, wheel.maxMomentumStorage],
//       borderColor: `hsl(${Math.random() * 360}, 70%, 50%)`, // More subdued color
//       backgroundColor: `hsla(${Math.random() * 360}, 70%, 50%, 0.3)`, // More subdued color with transparency
//       borderWidth: 2,
//       pointBackgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`, // Point color
//       pointBorderColor: '#fff',
//       pointBorderWidth: 2,
//       pointRadius: 5,
//       fill: true
//     }));

//     const chartInstance = new Chart(ctx, {
//       type: 'radar',
//       data: {
//         labels: labels,
//         datasets: datasets
//       },
//       options: {
//         scales: {
//           r: {
//             angleLines: {
//               display: true,
//               color: '#ddd'
//             },
//             grid: {
//               color: '#eee'
//             },
//             suggestedMin: 0,
//             suggestedMax: 100,
//             ticks: {
//               stepSize: 10,
//               callback: value => value.toFixed(0)
//             }
//           }
//         },
//         elements: {
//           line: {
//             borderWidth: 2
//           }
//         },
//         plugins: {
//           legend: {
//             position: 'top',
//             labels: {
//               boxWidth: 10,
//               padding: 15
//             }
//           },
//           tooltip: {
//             callbacks: {
//               label: function(context) {
//                 return `${context.dataset.label}: ${context.raw.toFixed(2)}`;
//               }
//             }
//           }
//         },
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });

//     // Clean up chart on unmount
//     return () => {
//       if (chartRef.current) {
//         const chartInstance = Chart.getChart(chartRef.current);
//         if (chartInstance) {
//           chartInstance.destroy();
//         }
//       }
//     };
//   }, [data]);

//   return (
//     <div style={{ position: 'relative', width: '100%', height: '400px' }}>
//       <canvas ref={chartRef}></canvas>
//     </div>
//   );
// };

// export default RadarChart;
"use client";
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = () => {
  const data = [
    {
      name: "RW222",
      mass: 215,
      maxTorque: 2,
      peakPower: 5.0,
      maxMomentumStorage: 15
    },
    {
      name: "W45E",
      mass: 2.6,
      maxTorque: 0.2,
      peakPower: 48,
      maxMomentumStorage: 4.0
    },
    {
      name: "RW250B",
      mass: 8.5,
      maxTorque: 75,
      peakPower: 90,
      maxMomentumStorage: 25
    },
    {
      name: "CubeWheel Medium",
      mass: 0.15,
      maxTorque: 1,
      peakPower: 2.3,
      maxMomentumStorage: 0.01082
    }
  ];

  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    const labels = ['Mass', 'Max Torque', 'Peak Power', 'Max Momentum Storage'];
    const datasets = data.map((wheel, index) => ({
      label: wheel.name,
      data: [wheel.mass, wheel.maxTorque, wheel.peakPower, wheel.maxMomentumStorage],
      borderColor: `hsl(${index * 60}, 70%, 50%)`, // Professional colors
      backgroundColor: `hsla(${index * 60}, 70%, 50%, 0.3)`,
      borderWidth: 2,
      pointBackgroundColor: `hsl(${index * 60}, 70%, 50%)`,
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 6,
      fill: true
    }));

    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true,
              color: '#ccc' // Subtle color for angle lines
            },
            grid: {
              color: '#444' // Subtle color for grid lines
            },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              stepSize: 10,
              color: '#fff', // Text color for ticks
              callback: value => value.toFixed(0)
            }
          }
        },
        elements: {
          line: {
            borderWidth: 2
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 12,
              padding: 15,
              color: '#fff' // Legend text color
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background for tooltips
            titleColor: '#fff',
            bodyColor: '#fff',
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.raw.toFixed(2)}`;
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20
          }
        }
      }
    });

    // Clean up chart on unmount
    return () => {
      if (chartRef.current) {
        const chartInstance = Chart.getChart(chartRef.current);
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };
  }, [data]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', backgroundColor: '#222', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Radar Chart Analysis</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RadarChart;
