import React,{ useState } from 'react';
import '../styles/serviceStyles.css'; 
import itManagementImage from '../assets/itManagementImage.jpg';
import sustainableTechImage from '../assets/sustainableTechImage.jpg';
import cybersecurityImage from '../assets/cybersecurityImage.jpg';
import uxImage from '../assets/uxImage.jpg';


function Services(){
    

    return (
    <div>
      <div className="servicesTopContainer">
          <br />
          <h1 className="servicesCaptionBold">At BrightTech Solutions, companies can choose
                    one of four services to receive assistance with</h1>
          <p>Below are short descriptions of each service so that client's have
             a general idea of what to expect.</p>
                
          <br />
          <br />
      </div>

      <br />

      <div className="itManagementContainer">
        <h2>IT Management</h2>
        <br />
        <div className="itManagementExplanation">
          <div className="itManagementText">
              <p>text here</p>
          </div>

          <div className="itImageContainer">
            <img className="itManagementImage" src={itManagementImage} alt="IT Management Picture"/>
          </div>

        </div>
      </div>
 
      <br />
      <br />
 

      <hr className="horizontalLine"></hr>

      <br />

      <div className="sustainableTechContainer">
        <h2>Sustainable Tech Consulting</h2>
        <br />
        <div className="sustainableTechExplanation">
          <div className="sustainableTechText">
              <p>text here</p>
          </div>

          <div className="sustainableImageContainer">
            <img className="sustainableTechImage" src={sustainableTechImage} alt="Sustainable Tech"/>
          </div>

        </div>
      </div>

      

      

      <br />
      <br />

      <hr className="horizontalLine"></hr>

      <br />

      <div className="cybersecurityContainer">
        <h2>Cybersecurity & Risk Management</h2>
        <br />
        <div className="cybersecurityExplanation">
          <div className="cybersecurityText">
              <p>text here</p>
          </div>

          <div className="cybersecurityImageContainer">
            <img className="cybersecurityImage" src={cybersecurityImage} alt="Cybersecurity Image"/>
          </div>

        </div>
      </div>

      <br />
      <br />

      <hr className="horizontalLine"></hr>

      <br />


      <div className="uxContainer">
        <h2>UX/UI Design</h2>
        <br />
        <div className="uxExplanation">
          <div className="uxText">
              <p>text here</p>
          </div>

          <div className="uxImageContainer">
            <img className="uxImage" src={uxImage} alt="UX/UI Design Image"/>
          </div>

        </div>
      </div>






      
    </div> //End of main div element
  );
}


export default Services;