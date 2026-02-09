import React from 'react';
import '../styles/getStarted.css'; 
import { Link, useLocation } from 'react-router-dom';

function GetStarted(){
    const location = useLocation();

    return(
        <div className="getStartedPageContainer">
            <table>
                <tr>
                    <th>
                        <h3 className="planTitle">Standard Plan</h3>
                        <ul>
                            <li>$149.00 per month</li>
                            <li>Basic technical support</li>
                            <li>Timed System Monitoring</li>
                            <li>Consulting Hours (8-10 hours per week)</li>
                        </ul>
                        <Link
                            to="/standardsignup"
                            className={`startedButton ${
                                location.pathname === "/standardlogin" ? "active" : ""
                            }`}
                            >
                            Get Started
                        </Link>
                    </th> {/*END OF STANDARD GET STARTED */}


                    <th>
                        <h3 className="planTitle">Premium Plan</h3>
                        <ul>
                            <li>$399.00 per month</li>
                            <li>Priority technical support</li>
                            <li>Advanced analytics report</li>
                            <li>Consulting Hours (15-25 hours per week)</li>
                        </ul>
                        <Link
                            to="/premiumsignup"
                            className={`startedButton ${
                                location.pathname === "/premiumlogin" ? "active" : ""
                            }`}
                            >
                            Get Started
                        </Link>
                        
                    </th>{/*END OF PREMIUM GET STARTED */}


                    <th>
                        <h3 className="planTitle">Deluxe Plan</h3>
                        <ul>
                            <li>$699.00 per month</li>
                            <li>Enhanced technical support</li>
                            <li>Quarterly audits & optimized reviews</li>
                            <li>Full system monitoring</li>
                            <li>Consulting Hours (30-40 hours per week)</li>
                        </ul>
                        <Link
                            to="/deluxesignup"
                            className={`startedButton ${
                                location.pathname === "/deluxelogin" ? "active" : ""
                            }`} 
                            >
                            Get Started
                        </Link>
                    </th> {/*END OF DELUXE GET STARTED */}
                    
                </tr>
                
            </table>
        </div> //End of main div element
    );
}

export default GetStarted;