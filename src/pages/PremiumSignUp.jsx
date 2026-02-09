import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/signUpStyles.css'; 

function PremiumSignUp(){
    const location = useLocation();

    return(
        <div>
            <br />
            <form className="signUpStylesForm">
                <h2 className="formTitle">Sign Up Now</h2>
                <p className="formCaption"><i>Please fill out your company's information</i></p>
                <br />

                <label for="text" className="formLabels"><b>Company Name: </b> </label>
                <input type="text" name="companyName" placeholder="Company Name" required /> <br />

                <br />

                <label for="email" className="formLabels"><b>Email: </b> </label>
                <input type="email" name="email" placeholder="Admin Email Address" required /> <br />

                <br />

                <label for="text" className="formLabels"><b>Admin Name: </b> </label>
                <input type="text" name="adminName" placeholder="Admin Full Name" required /> <br />

                <br />

                <label for="password" className="formLabels"><b>Create Password: </b> </label>
                <input type="password"  id="myPassword" name="password" placeholder="Password" required /> <br />

                <br />

                <label for="text" className="formLabels"><b>Plan: </b> </label>
                <input id="plan" name="plan" type="text" value="Premium" disabled /> <br />
                
                <br />

                <label for="service"><b>Service: </b></label>
                <select name="service" id="serviceStyles">
                    <option value="itmanagement">IT Management</option>
                    <option value="consulting">Sustainable Tech Consulting</option>
                    <option value="cybersecurity">Cybersecurity & Risk Management</option>
                    <option value="uidesign">UX/UI Design</option>
                </select>

                <br />
                <br />

                <p className="signInMessage">
                    Already have an account? Visit the 
                        <Link to="/login" 
                            className={`${location.pathname === '/login' ? 'active' : ''} no-underline`}> Log In </Link>
                                page access your company's dashboard.
                </p>

                <button className="signUpSubmit">Sign Up</button>
            </form>
        </div> //End of main div element
    );

}

export default PremiumSignUp;