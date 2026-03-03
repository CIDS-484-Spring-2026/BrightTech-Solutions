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
          "#cce2e8",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  //Information for column that displays ticket priority level
  const tickets = [
    {id: 1, title: "Login issue", priority: "Low"},
    {id: 2, title: "Navigation bar issue", priority: "Moderate"},
    {id: 3, title: "Suspicious log in attempt", priority: "Urgent"},
    {id: 4, title: "Consultation meeting", priority: "Moderate"},
    {id: 5, title: "Customer testing", priority: "Low"}
  ];

  const ticketPriorityClass = (priority) => {
    switch(priority) {
        case "Low":
            return "low priority"
        case "Moderate":
            return "moderate priority"
        case "Urgent":
            return "urgent priority"
    }
  };


    return(
        <div className= "mainDashContainer">
            
            <div className="topDashContainer">
                <div className="dashTopBar">
                    <h2>Welcome back, User!</h2>
                </div>

                <br />
                <br />
                

                <div className="ticketChartTable">
                    <BarChart chartData={chartData} />
                </div>

                <div className="priorityTicketColumn">
                    <h3>Recent Support Tickets</h3>
                    {tickets.map((ticket) => (
                        <div key={ticket.id} className="ticket-card">
                            <h4>{ticket.title}</h4>
                            <span className={ticketPriorityClass(ticket.priority)}>
                                {ticket.priority}
                            </span>
                        </div>
                    ))}
                </div>

                <br />
                <br />

            </div>
            
            

        </div> //End of main div element
    );
}

export default Dashboard;