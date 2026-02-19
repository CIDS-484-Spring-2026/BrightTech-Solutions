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
              <p>BrightTech Solutions performs IT mangement for each of their clients by
                monitoring and administrating different technology systems. This includes
                hardware, software, and a variety of networks. For instance, if a specific
                network within the company's network faces some sort of interruption, 
                BrightTech Solutions will work round the clock to promptly address the 
                situation. 
              </p>

              <p>Ultimately, a company cannot function at its best without any form of 
                IT management. This service plays an integral role in the daily operations 
                of a business. 
              </p>
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
              <p>It goes without saying that the constant evolution of technology, 
                while beneficial to people, can cause a tremendous strain on the 
                physical environment. For this reason, BrightTech Solutions is 
                committed to helping companies find new innovative ways to be
                mindful of their carbon footprint while improving their business.
              </p>
              <p>In order to acheive this, we provide our clients with high-quality 
                guidance so that they can discover ways to implement and optomize 
                the technologies they use in such a way that can improve 
                sustainability. These methods include training and strategy meetings 
                to reduce carbon output, the responsible use of AI, and making sure 
                hardware and servers are being set up in a way that prioritizes 
                energy effciency.
              </p>
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
              <p>Despite having various measures in place to protect the sanctity and 
                privacy of information, there are times were leaks and breaches are 
                completely unavoidable. Data leaks can be extremely dangerous because 
                it can put the sensetive detaisl around products of a business,
                as well as the employees, in great danger.
              </p>
              <p>To try and reduce the level at which these attacks happen,
                 BrightTech Solutions provides round-the-clock monitoring, 
                 reports, and employee training so that the administrative
                 members of each company will be properly instructed on how 
                 they can help their business fight off these attacks.
                 </p>
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
              <p>One of the main things that draw customers to a specific website 
                would be its appearance. If a web application is not visually
                appealing and difficult to use, users will quickly lose interest 
                in whatever the company is trying to advertise to them. To prevent
                this from happening, BrightTech Solutions' design team helps 
                companies through the entire drafting and design process.
              </p>
              <p>BrightTech Solutions provides assistance with both User Experience 
                and User Interface design processes. Based on the needs of the client,
                our team conducts user research, determines use cases, and creates 
                wireframes on what the skeleton of the website will look like. 
                Additionally, they develop the visual aspects of the website, such as 
                the size and font of different components, as well as their 
                placement relative to one another. Ultimately, the main goal is 
                to be the bridge between user satisfaction and functionality. 
              </p>
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