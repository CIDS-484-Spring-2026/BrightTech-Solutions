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

export const EngagementLineChart = () => {
    //Line Chart those shows website run time
  
    const engagementData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Monthly Engagement Time",
                data: [135, 125, 155, 120, 115, 112],
                borderColor: 'rgb(112, 141, 237)',
                backgroundColor: 'rgba(54, 107, 168, 0.2)',
                tension: 0.1,
                fill: true,
            },
            ],
        };
    

    const engagementOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "User Engagement Time Performance",
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
                    text: "Engagement Time (s)",
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
        <div className="engagementTimeChart">
            <Line data={engagementData} options={engagementOptions} />
        </div>
    );
};

