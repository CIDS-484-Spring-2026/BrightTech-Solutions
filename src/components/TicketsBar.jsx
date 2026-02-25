import React from 'react';
import { Bar } from 'react-chartjs-2'; // Import the specific chart type component

export const BarChart = ({ chartData }) => { // Expects data as a prop
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Weekly Ticket Analytics</h2>
      <Bar
        data={chartData}
        options={{ // Configuration options for the chart
          plugins: {
            title: {
              display: true,
              text: "Completed Tickets For the Week"
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  );
};