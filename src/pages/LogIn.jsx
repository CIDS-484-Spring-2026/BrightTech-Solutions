import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/logInStyles.css'; 
//import { useNavigate } from 'react-router-dom'; **COME BACK AND USE LATER**

function LogIn(){
    const location = useLocation();

    return(
        <div>
            <br />
            
            <form className="logInStylesForm">
                <h2 className="formTitle">Welcome Back!</h2>
                <p className="formCaption"><i>Please log in to access dashboard</i></p>
                <br />


                <label for="email" className="formLabels"><b>Admin Name: </b> </label>
                <input type="email" name="email" placeholder="Email: " required /> <br />

                <br />

                <label for="password" className="formLabels"><b>Password: </b> </label>
                <input type="password"  id="myPassword" name="password" placeholder="Password" required /> <br />

                <br />


                <p className="signInMessage">
                    Don't have an account yet? Visit the 
                     <Link to="/getstarted" 
                        className={`${location.pathname === '/getstarted' ? 'active' : ''} no-underline`}> Get Started </Link>
                         page to activate your company's account.
                </p>

                <button className="logInSubmit">Log In</button>
            </form>
        </div> //End of main div element
    );
}

export default LogIn;