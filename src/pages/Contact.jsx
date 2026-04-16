import React, { useState } from 'react';
import '../styles/contactStyles.css'; 

function Contact(){

    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');


    const handleSubmit = async(event) => {
        event.preventDefault();

        const contactFormData = {
            email,
            comment
        };

    //Continue the rest below

        try {
            const response = await fetch("http://localhost:5000/add-comment",{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactFormData)
            })

            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();

            console.log("Success: ", result);
            alert("Form submission successful. Thank you for your input!")

            //Resetting the form fields
            setEmail('');
            setComment('');
        } catch (error){
            console.error("Error with form submission: ", error);
            alert("Form submission failed. Please try again later");
        }

    };

    

    

    return(
        <div>
            <br />
            <br />
            <form  onSubmit={handleSubmit} className="contactForm">
                <h2 className="formTitle">We'd like to here from your company!</h2>
                <p className="formCaption"><i>Please send any questions or concerns, 
                    and a member of our team will respond to you promptly.</i></p>
                <br />

                <label for="email" className="formLabels"><b>Email: </b> </label>
                
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                /> 

                <br />
                <br />

                <textarea 
                    className="comment" 
                    rows="4" 
                    cols="50" 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter comment here..." 
                />
                
                <br />
                <br />

                <button className="commentSubmit"><b>Submit</b></button>

            </form>
            <br />
            <br />
            <br />
        </div> //End of main div element

        
        
    );
}

export default Contact;