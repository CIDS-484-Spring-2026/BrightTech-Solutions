import React from 'react'
import '../styles/aboutStyles.css';
import aboutCollage1 from '../assets/aboutCollage1.jpg';
import aboutCollage2 from '../assets/aboutCollage2.jpeg';
import aboutCollage3 from '../assets/aboutCollage3.webp';
import aboutCollage4 from '../assets/aboutCollage4.jpg';
import aboutCollage5 from '../assets/aboutCollage5.jpg';
import aboutCollage6 from '../assets/aboutCollage6.jpg';
import historyImage from '../assets/historyImage.jpg';

function About(){
    return(
        <div>
            <div className="aboutTopContainer">
                <br />
                <h1 className="aboutCaptionBold">We provide the best technical
                    services to help enhance your business 
                </h1>
                <p>With our assistance, you can expect your business to flourish.</p>
                <p>BrightTech Solutions is the final destination for technical excellence</p>
                
                <br />
                <br />
            </div>

            <br />

            <div className="row1">
                <div className="column">
                    <img 
                        src={aboutCollage1} 
                        style={{ width: "100%", height: "245px" }}
                    />
                </div>
                <div className="column">
                    <img 
                        src={aboutCollage2} 
                        style={{ width: "100%", height: "245px" }}
                    />
                </div>
                <div className="column">
                    <img 
                        src={aboutCollage3} 
                        style={{ width: "100%", height: "245px" }}
                    />
                </div>
                <div className="column">
                    <img 
                        src={aboutCollage4} 
                        style={{ width: "100%", height: "245px" }}
                    />
                </div>
                <div className="column">
                    <img 
                        src={aboutCollage5} 
                        style={{ width: "100%", height: "245px" }}
                    />
                </div>
                <div className="column">
                    <img 
                        src={aboutCollage6} 
                        style={{ width: "100%", height: "245px" }}
                    />
                </div>
            </div> 

            <br />
            <br />

            <div className="aboutHistoryContainer">
                <h2>Where It All Began</h2>
                <div className="historyExplanation">
                    <div className="historyText">
                        <p>BrightTech Solutions came to fruition in 2018 thanks to our diligent
                            team members. Before becoming what it is today, the team asked 
                            themselves one simple question: How can we help other businesses 
                            reach their full potential? This could manifest itself in the form 
                            of popularity, effciency, or their overall impact on society. At its
                            core, that is what BrightTech Solutions is. 
                        </p>

                        <p>BrightTech Solutions is able to tackle such a task by offering
                            companies a set of different technical services to choose from.
                            Once they choose the type of service they would like to receive,
                            our teams work extensively hand in hand to make sure that all of 
                            their needs are properly met.
                        </p>

                        <p>Our organization has grown since its humble beginings 8 years ago, 
                            and has been able to help over 25,000 businesses maintain their brand
                            and grow their audience. 
                        </p>
                    </div>
                    
                    <div className="historyImageContainer">
                        <img className="historyImage" src={historyImage} alt="History Picture"/>
                    </div>
        
                </div>
            </div>

            <br />
            <br />
            <br />

            <hr className="horizontalLine"></hr>
            <br />

            <h2>Still unsure? Here are some frequently asked questions we receive</h2>
            <details className="faqDropdown">
                <summary className="faqQuestions">What type of IT Management services
                    does BrightTech Solutions provide?</summary>
                <p className="faqAnswer">There are a number of different IT services that we can conduct for your business.
                    Some of them include, but are not limited to:
                </p>
                <ul className="faqList">
                    <li>Helpdesk & Support Services</li>
                    <li>Data Backup & Disaster Recovery</li>
                    <li>Network Operations Center</li>
                    <li>Managed Communications</li>
                </ul>
            </details>

            < br />

            <details className="faqDropdown">
                <summary className="faqQuestions">Does BrightTech Solutions only work with large companies?</summary>
                <div>
                    <p className="faqAnswer">Not at all! BrightTech Solutions was founded for 
                        the very purpose of seeing businesses of all sizes thrive and flourish. 
                        Whether you are part of a small startup or a major corporation, we believe
                        that there is always room from growth. For that reason, we highly encourage
                        small businesses to consider partnering with us so that we can provide them
                        with the tools they need to develop a solid foundation for their brand.
                    </p>
                </div>
            </details>

            < br />

            <details className="faqDropdown">
                <summary className="faqQuestions">Who will be in charge of monitoring our company's account?</summary>
                <div>
                    <p className="faqAnswer">On the BrightTech Solutions side of this partnership,
                         the designated specialists for each service will be assigned to a company to 
                         address all tasks and concerns. From the end of the client, each company 
                         can designate certain administrative members to create an account so that 
                         they can also see everything from the account dashboard.
                    </p>
                </div>
            </details>

            < br />

            <details className="faqDropdown">
                <summary className="faqQuestions">How are urgent, high-priority issues handled?</summary>
                <div className="faqContent">
                    <p className="faqAnswer">BrightTech Solutions utilizes a ticketing system to prioritize
                        and keep track of all running tasks. The priority levels are sorted as such:
                    </p>
                    <ul className="faqList">
                        <li><b>Low Priority: </b>Small tasks that generally do not take much
                            time to complete </li>
                        <li><b>Moderate Priority: </b> Tasks that are important, but still have some 
                            time before they need to be completed. </li>
                        <li><b>Urgent Priority: </b> Major tasks that must be handled right away, as it might
                            impact the performance of the company's website
                        </li>
                    </ul>
 
                </div>
            </details>

            < br />

            <details className="faqDropdown">
                <summary className="faqQuestions">What format are all support communications provided in?</summary>
                <div className="faqContent">
                    <p className="faqAnswer">All communications between BrightTech Solutions and their clients
                        take place remotely. That way, it can be easier for companies to reach out for help
                        as the need arises. We also conduct all communications through a number of different
                        ways.
                    </p>
                    <ul className="faqList">
                        <li>Microsoft Teams Meetings</li>
                        <li>Phone Calls</li>
                        <li>TeamViewer Conferences</li>
                        <li>Email</li>
                    </ul>

                </div>
            </details>



        

        </div> //END OF MAIN DIV ELEMENT
        

        
    );
}

export default About;