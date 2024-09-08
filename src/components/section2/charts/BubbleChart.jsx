"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const BubbleChart = () => {
  const data = [
    { name: "RW222", mass: 215, maxTorque: 2, peakPower: 5.0 },
    { name: "W45E", mass: 2.6, maxTorque: 0.2, peakPower: 48 },
    { name: "RW250B", mass: 8.5, maxTorque: 75, peakPower: 90 },
    { name: "Reaction Wheel 60", mass: 0.27, maxTorque: 6, peakPower: null },
    { name: "RW500", mass: 21.8, maxTorque: 12, peakPower: 80 },
    { name: "RW400", mass: 375, maxTorque: 12, peakPower: 15 },
    { name: "WHL-200", mass: 423, maxTorque: 25, peakPower: null },
    { name: "RW1000", mass: 10, maxTorque: 1, peakPower: 160 },
    { name: "CubeWheel Medium", mass: 0.15, maxTorque: 1, peakPower: 2.3 },
  ];

  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    const datasets = data.map((wheel) => ({
      label: wheel.name,
      data: [
        {
          x: wheel.mass,
          y: wheel.maxTorque,
          r: wheel.peakPower ? Math.sqrt(wheel.peakPower) * 3 : 5, // Bubble radius based on peakPower
        },
      ],
      backgroundColor: getRandomColor(), // Random color for each bubble
      borderColor: 'rgba(0, 0, 0, 0.2)', // Darker border color
      borderWidth: 1,
    }));

    new Chart(ctx, {
      type: "bubble",
      data: {
        datasets: datasets,
      },
      options: {
        responsive: true,
        animation: {
          duration: 1000, // Animation duration
          easing: 'easeOutQuart' // Smooth animation easing
        },
        plugins: {
          legend: {
            position: "top",
            labels: {
              boxWidth: 10,
              padding: 20,
              color: '#fff', // Legend text color
              font: {
                size: 12 // Legend font size
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: Mass ${context.raw.x}, Max Torque ${context.raw.y}, Peak Power ${context.raw.r ** 2}`;
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Mass",
              color: "#fff", // Axis title color
              font: {
                size: 14
              }
            },
            min: 0,
            ticks: {
              stepSize: 50,
              color: "#fff" // Axis ticks color
            },
            grid: {
              display: false // Hide grid lines
            }
          },
          y: {
            title: {
              display: true,
              text: "Max Torque",
              color: "#fff", // Axis title color
              font: {
                size: 14
              }
            },
            min: 0,
            ticks: {
              stepSize: 10,
              color: "#fff" // Axis ticks color
            },
            grid: {
              display: false // Hide grid lines
            }
          },
        },
        layout: {
          padding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20
          }
        }
      },
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
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", backgroundColor: "#333", borderRadius: "8px" }}>
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default BubbleChart;
