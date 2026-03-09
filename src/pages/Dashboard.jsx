import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/dashboardStyles.css'; 
import { useState, useEffect } from 'react';
import {BarChart} from '../components/TicketsBar';
import { RunTimeLineChart } from '../components/RunTimeLineChart';
import {TicketData} from '../data/TicketAnalytics';
import profilePic from '../assets/genericProfilePic.png';
import runTimeButton from '../assets/runTimeButton.svg';
import engagementButton from '../assets/engagementButton.svg';
import productivityButton from '../assets/productivityButton.svg';
import uniqueVisitorsButton from '../assets/uniqueVisitorsButton.svg';
import { EngagementLineChart } from '../components/EngagementLineChart';
import { ProductivityLineChart } from '../components/ProductivityLineChart';
import { UniqueVisitorsLineChart } from '../components/UniqueVisitorsLineChart';




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

  //Buttons dropdown menu for 3rd row (line charts)
  const [runOpen, setRunOpen] = useState(false);
  const [engagementOpen, setEngagementOpen] = useState(false);
  const [productivityOpen, setProductivityOpen] = useState(false);
  const [uniqueVisitorsOpen, setUniqueVisitorsOpen] = useState(false);

  const toggleRunDropdown = () => {
    setRunOpen(!runOpen);
  };

  const toggleEngagementDropdown = () => {
    setEngagementOpen(!engagementOpen);
  };

  const toggleProductivityDropdown = () => {
    setProductivityOpen(!productivityOpen);
  };

  const toggleUniqueVisitorsDropdown = () => {
    setUniqueVisitorsOpen(!uniqueVisitorsOpen);
  };

  //Note to self: Even though page current renders as blank,
  //it is only because the other line charts and buttons have not been created yet
  //and most likely because all are still linked to the run time chart
  //just add & fix those things and everything should be fine

  
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
                            <br />
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
                </div> {/* End of second row div element */}
                
                <br />
            

                <div className="thirdDashRow">
                    <div className="thirdDashColumn">
                        <img src={runTimeButton} onClick={toggleRunDropdown} className="runTimeButton"/>
                        <div className="dropdown-LineContainer">
                            <div className={`runLineContainer ${runOpen ? 'open' : 'closed'}`}>
                                <RunTimeLineChart />
                            </div>
                        </div>
                    </div>

                    <div className="thirdDashColumn">
                        <img src={engagementButton} onClick={toggleEngagementDropdown} className="engagementButton"/>
                        <div className="dropdown-LineContainer">
                            <div className={`engagementContainer ${engagementOpen ? 'open' : 'closed'}`}>
                                <EngagementLineChart />
                            </div>
                        </div>
                    </div>


                    <div className="thirdDashColumn">
                        <img src={productivityButton} onClick={toggleProductivityDropdown} className="productivityButton"/>
                        <div className="dropdown-LineContainer">
                            <div className={`productivityContainer ${productivityOpen ? 'open' : 'closed'}`}>
                                <ProductivityLineChart />
                            </div>
                        </div>
                    </div>


                    <div className="thirdDashColumn">
                        <img src={uniqueVisitorsButton} onClick={toggleUniqueVisitorsDropdown} className="uniqueVisitorsButton"/>
                        <div className="dropdown-LineContainer">
                            <div className={`uniqueVisitorsContainer ${uniqueVisitorsOpen ? 'open' : 'closed'}`}>
                                <UniqueVisitorsLineChart />
                            </div>
                        </div>
                    </div>



                </div> {/* END OF MAIN 3RD DASH ROW CONTAINER!!! */}
                
                
                

                <br />
                

                

                

        

            </div> {/* End of top dash container */}

            
            
            

        </div> //End of main div element
    );
}

export default Dashboard;