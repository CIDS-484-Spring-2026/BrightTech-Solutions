import React from 'react';
import {Line} from "react-chartjs-2";
import "../styles/dashboardStyles.css";
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale, 
    PointElement,
    LineElement,
    Title, 
    Tooltip,
    Legend,
    Filler
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const RunTimeLineChart = () => {
    //Line Chart those shows website run time
  
    const runData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Monthly Run Time",
                data: [5, 7, 10, 4, 3, 2],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1,
                fill: true,
            },
            ],
        };
    

    const runOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Website Run Time Performance",
            },

        },
        scales: {
            x: {
                  title: {
                    display: true,
                    text: "Months",
                    color: "rgb(124, 124, 124)",
                    font: {
                        size: 14,
                        weight: "bold"
                    }
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Run Time (s)",
                    color: "rgb(124,124,124)",
                    font: {
                        size: 14,
                        weight: "bold"
                    }
                }
            },
        },
    };

    return(
        <div className="runTimeChart">
            <Line data={runData} options={runOptions} />
        </div>
    );
};

