import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/dashboardStyles.css'; 
import { useState, useEffect } from 'react';
import {BarChart} from '../components/TicketsBar';
import {TicketData} from '../data/TicketAnalytics';


function Dashboard(){

    //My practice of a bar chart
  const chartData = ({
    labels: TicketData.map((data) => data.weekday), 
    datasets: [
      {
        label: "Tickets Completed",
        data: TicketData.map((data) => data.ticketsAdded),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

    return(
        <div className= "mainDashContainer">
            <br />
            <br />
            <div className="dashTopBar">
                <h2>Welcome back, User!</h2>
            </div>

            <br />
            <br />
            

            <div className="ticketChartTable">
                <BarChart chartData={chartData} />
            </div>

            <br />
            <br />


        </div> //End of main div element
    );
}

export default Dashboard;