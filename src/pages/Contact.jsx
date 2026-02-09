import React from 'react';
import '../styles/contactStyles.css'; 

function Contact(){
    return(
        <div>
            <br />
            <form className="contactForm">
                <h2 className="formTitle">We'd like to here from your company!</h2>
                <p className="formCaption"><i>Please send any questions or concerns, 
                    and a member of our team will respond to you promptly.</i></p>
                <br />

                <label for="email" className="formLabels"><b>Email: </b> </label>
                <input type="email" name="email" placeholder="Email" required /> <br />
                <br />
                <textarea className="comment" rows="4" cols="50" placeholder="Enter comment here..."></textarea>
                
                <br />
                <br />

                <button className="commentSubmit"><b>Submit</b></button>

            </form>
        </div>
        
    );
}

export default Contact;