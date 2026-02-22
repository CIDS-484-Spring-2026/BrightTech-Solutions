import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/signUpStyles.css'; 
import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom'; **COME BACK AND USE LATER**

function PremiumSignUp(){
    const location = useLocation();

    //Creating variables that will be sent to the database
    const [idNumber, setIDNumber] = useState(null);
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const [plan, setPlan] = useState('Premium');
    const [service, setService] = useState('');
        
    //Handles the submission of the form
    const handleSubmit = async(event) => {
        event.preventDefault();
        
        //const navigate = useNavigate(); **Will take users to next page**
        
        const standardFormData = {
            companyName,
            email,
            adminName,
            password,
            plan,
            idNumber,
            service
        };
        
        try {
            const response = await fetch("API URL HERE",{
                method: 'POST',
                headers: {
                    "Content-Type": "application/JSON"
                },
                body: JSON.stringify(standardFormData)
            })
        
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const result = await response.json();
        
            console.log("Success: ", result);
            alert("Form submission successful. Thank you for your input!")
            //navigate('/dashboard') **will ideally lead user to dashboard**
        
        
        } catch (error){
            console.error("Error with form submission: ", error);
            alert("Form submission failed. Please try again later");
        }
        
    };
    
    //Generating ID number
    const generateNumber = () => {
        const min = 1000;
        const max = 199999;
        //Equation that will generate an ID number between the min and max
        const newID = Math.floor(Math.random() * (max - min + 1)) + min;
        setIDNumber(newID);
    };
    
    useEffect(() => {
        generateNumber();
    }, []);

    return(
        <div>
            <br />
            <form onSubmit={handleSubmit} className="signUpStylesForm">
                <h2 className="formTitle">Sign Up Now</h2>
                <p className="formCaption"><i>Please fill out your company's information</i></p>
                <br />

                <label for="text" className="formLabels"><b>Company Name: </b> </label>
                <input 
                    type="text" 
                    name="companyName" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company Name" 
                    required 
                /> 
                
                <br />

                <br />

                <label for="email" className="formLabels"><b>Email: </b> </label>
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Admin Email Address" 
                    required 
                />  
                
                <br />

                <br />

                <label for="text" className="formLabels"><b>Admin Name: </b> </label>
                <input 
                    type="text" 
                    name="adminName" 
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    placeholder="Admin Full Name" 
                    required 
                /> 
                
                <br />

                <br />

                <label for="password" className="formLabels"><b>Create Password: </b> </label>
                <input 
                    type="password"  
                    id="myPassword" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password" 
                    placeholder="Password" 
                    required 
                /> 
                
                <br />

                <br />

                <label for="text" className="formLabels"><b>Plan: </b> </label>
                <input 
                    id="plan" 
                    name="plan" 
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    type="text" 
                    disabled 
                />  
                
                <br />
                
                <br />

                <label for="number" className="formLabels"><b>ID Number: </b> </label>
                <input 
                    id="idNum" 
                    name="idNum" 
                    type="number" 
                    value={idNumber || ''}
                    onChange={(e) => setIDNumber(e.target.value)}
                    disabled 
                /> 
                
                <br />

                <br />

                <label for="service"><b>Service: </b></label>
                <select 
                    name="service" 
                    id="serviceStyles"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                >
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