import React from 'react';
import '../styles/homeStyles.css';

function Home() {
  return (
    <div className="homePageContainer">
      <table className="initialWelcomeMessage_andPhoto">
        <tr>
          <th className="homeCaption">
            <p>words that will go on the homepage</p>
          </th>
          <th className="homePicture">
            <p>home details</p>
          </th>
        </tr>
      </table>

      <table>
        <tr>
          <th className="bottomRow">
            <p>more words</p>
          </th>
        </tr>
      </table>


    </div> //End of main div element
  );
}

export default Home;
