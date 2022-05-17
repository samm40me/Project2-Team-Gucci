import React from "react";
import './Hemisphere.css'
import calgaryPic from './images/Capture.PNG'
import notCalgaryPic from "./images/notCalgary.webp";

const hemisphereConfig = {
    Calgary: {
        text: 'it is Calgary',
        picture: calgaryPic

    },
    NotCalgary: {
        text: 'it is not Calgary',
        picture: notCalgaryPic

    }
}

const HemispehereDisplay = ({latitude}) => {
    const hemisphere =
        latitude = 51.0447 ? "Calgary" : "Not in Calgary";
    const { text, picture } = hemisphereConfig[hemisphere]
    return (

        <div className={hemisphere}>
          <div className="ui raised text container segment">
            <div className="image">
              <img src={picture} alt="calgary picture" />
            </div>
            <div className="ui teal bottom attached">
              <h1>{text}</h1>
            </div>
          </div>
        </div>

    );
};
export default HemispehereDisplay;