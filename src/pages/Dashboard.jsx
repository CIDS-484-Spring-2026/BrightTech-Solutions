import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/dashboardStyles.css'; 
import { useState, useEffect } from 'react';


function Dashboard(){
    return(
        <div className= "mainDashContainer">
            <br />
            <br />
            <div className="dashTopBar">
                <h2>Welcome back, User!</h2>
            </div>

            <br />
            <br />
            <br />

            <div className="ticketChartTable">
                <p>chart here</p>
            </div>


        </div> //End of main div element
    );
}

export default Dashboard;