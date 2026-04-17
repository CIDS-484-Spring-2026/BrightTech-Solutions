import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/logInStyles.css'; 
import { useState} from 'react';
import { useNavigate } from 'react-router-dom'; 

function LogIn(){
    const location = useLocation();
    const navigate = useNavigate(); 

    //Creating variables that will be sent to database for verification
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Handles the submission of the form
    const handleSubmit = async(event) => {
        event.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5000/login",{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                
                body: JSON.stringify({
                    email,
                    password
                })
            })
        
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const result = await response.json();
        
            console.log("Success: ", result);

            alert("Log in Successful!");
            navigate('/dashboard'); 
        
        
        } catch (error){
            console.error("Error with login: ", error);
            alert("Log in failed. Please make sure to enter the correct credentials.");
        }
        
    };

    return(
        <div>
            <br />
            
            <form onSubmit={handleSubmit} className="logInStylesForm">
                <h2 className="formTitle">Welcome Back!</h2>
                <p className="formCaption"><i>Please log in to access dashboard</i></p>
                <br />


                <label htmlFor="email" className="formLabels"><b>Admin Name: </b> </label>
                <input 
                    type="email" 
                    name="email" 
                    value= {email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email: "
                    required 
                /> 
                <br />

                <br />

                <label htmlFor="password" className="formLabels"><b>Password: </b> </label>
                <input 
                    type="password"  
                    id="myPassword" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" 
                    required 
                /> 
                <br />

                <br />


                <p className="signInMessage">
                    Don't have an account yet? Visit the 
                     <Link to="/getstarted" 
                        className={`${location.pathname === '/getstarted' ? 'active' : ''} no-underline`}> Get Started </Link>
                         page to activate your company's account.
                </p>

                <button className="logInSubmit">Log In</button>
            </form>

            <br />
            <br />
            
        </div> //End of main div element
    );
}

export default LogIn;