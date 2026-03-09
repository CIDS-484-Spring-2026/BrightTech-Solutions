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

export const UniqueVisitorsLineChart = () => {
    //Line Chart those shows website run time
  
    const visitorData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Monthly Unique Website Visitors",
                data: [300, 107, 205, 145, 125, 115],
                borderColor: 'rgb(111, 162, 240)',
                backgroundColor: 'rgba(62, 112, 155, 0.2)',
                tension: 0.1,
                fill: true,
            },
            ],
        };
     

    const visitorOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Unique Website Traffic",
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
                    text: "Unique Visitors",
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
        <div className="uniqueVisitorsChart">
            <Line data={visitorData} options={visitorOptions} />
        </div>
    );
};

