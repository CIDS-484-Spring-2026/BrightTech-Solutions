import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/dashboardStyles.css'; 
import { useState, useEffect } from 'react';
import {BarChart} from '../components/TicketsBar';
import {TicketData} from '../data/TicketAnalytics';
import profilePic from '../assets/genericProfilePic.png'


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
                    <h2><img src={profilePic} className="pfp"/> Welcome back, User!</h2>
                </div>


                <br />
                <br />

                <div className="innerDashContainer">
                    <div className="dashDisplayExplanation">
                        <div className="ticketChartTable">
                            <BarChart chartData={chartData} />
                        </div>


                        <br />

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
                        </div> {/*End of priority ticket column*/}
                    </div> {/*End of dash explanation*/}

                </div> {/*End of inner dash container*/}


                <br />
                <br />
                <br />

                <div className="colOfThree">
                    <table className="dashSecondRow">
                        <tr>
                            <th className="secondRow1">
                                <h3>Consulting Hours</h3>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </th>

                            <th className="secondRow2">
                                <h3>Network Monitoring</h3>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </th>

                            <th className="secondRow3">
                                <h3>text</h3>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </th>
                        </tr>
                    </table>
                </div>
                

                

                <br />
                <br />

            </div>
            
            

        </div> //End of main div element
    );
}

export default Dashboard;