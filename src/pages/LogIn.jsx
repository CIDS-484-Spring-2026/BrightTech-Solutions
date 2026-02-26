import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/logInStyles.css'; 
import { useState} from 'react';
//import { useNavigate } from 'react-router-dom'; **COME BACK AND USE LATER**

function LogIn(){
    const location = useLocation();

    //Creating variables that will be sent to database for verification
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Handles the submission of the form
    const handleSubmit = async(event) => {
        event.preventDefault();
        
        //const navigate = useNavigate(); **Will take users to next page**
        
        const logInData = {
            email,
            password
        };
        
        try {
            const response = await fetch("API URL HERE",{
                method: 'POST',
                headers: {
                    "Content-Type": "application/JSON"
                },
                body: JSON.stringify(logInData)
            })
        
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const result = await response.json();
        
            console.log("Success: ", result);
            alert("Login Successful!")
            //navigate('/dashboard') **will ideally lead user to dashboard**
        
        
        } catch (error){
            console.error("Error with login: ", error);
            alert("Form submission failed. Please try again later");
        }
        
    };

    return(
        <div>
            <br />
            
            <form onSubmit={handleSubmit} className="logInStylesForm">
                <h2 className="formTitle">Welcome Back!</h2>
                <p className="formCaption"><i>Please log in to access dashboard</i></p>
                <br />


                <label for="email" className="formLabels"><b>Admin Name: </b> </label>
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

                <label for="password" className="formLabels"><b>Password: </b> </label>
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
        </div> //End of main div element
    );
}

export default LogIn;