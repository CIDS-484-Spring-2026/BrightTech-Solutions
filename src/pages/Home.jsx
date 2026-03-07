import React from 'react';
import '../styles/homeStyles.css';
import { Link, useLocation } from 'react-router-dom';
import homeImage from '../assets/homeImage.svg';


function Home() {

  const location = useLocation();

  return (
    <div className="homePageContainer">
      <br />
      <table className="initialWelcomeMessage_andPhoto">
        <tr>
          <th className="homeCaption">
            <h1>Get ready to unlock your company's full potential with our skilled
              professionals and excellent technical services
            </h1>
            <br />
            <br />
            <Link
              to="/getstarted"
                className={`startedButton ${
                  location.pathname === "/getstarted" ? "active" : ""
                }`}
            >
                
                Get Started
            </Link>
          </th>
          <th className="homePicture">
            <img src={homeImage} className="homePageImage"/>
          </th>
        </tr>
      </table>

      <br />

      

      
    


    </div> //End of main div element
  );
}

export default Home;
