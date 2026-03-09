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

export const ProductivityLineChart = () => {
    //Line Chart those shows website run time
  
    const productivityData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Monthly Productivity",
                data: [5, 7, 10, 4, 3, 2],
                borderColor: 'rgb(72, 45, 246)',
                backgroundColor: 'rgba(80, 58, 191, 0.2)',
                tension: 0.1,
                fill: true,
            },
            ],
        };
    

    const productivityOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Website Maintainance Productivity",
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
                    text: "Productivity (hours)",
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
        <div className="productivityChart">
            <Line data={productivityData} options={productivityOptions} />
        </div>
    );
};

