import React from 'react';
import {FaGithub} from 'react-icons/fa';

const Vindermere = (props) => {
    let color1 = "darkblue"
    let color2 = "darkgreen"

    return (
        <div className="vindermere-container">
            <div className="vin-pic"></div>
            <div className="vin-info-container">
                <a href="http://vindermere.com/#/"><div className="vin-title" >Vindermere.com<a href="https://github.com/Arcade-Game/dungeon-crawler"><FaGithub /></a></div></a>
                <div className="vin-info-body">
                    <div className="vin-built-with">
                        <h3 style={{marginBottom: "5px", color: `${color2}`}}>Built with:</h3>
                        <span>
                            JavaScript, React, Node, Massive, Express, BCrypt, PostgreSQL, GreenSock, SCSS, CSS Grid, Flexbox.
                        </span>
                    </div>
                    <div className="vin-summary">
                        <h3 style={{marginBottom: "5px", color: `${color2}`}}>Summary:</h3>
                        <span>
                            A traditional top-down, fantasy-style, dungeon crawler. Town view lets you create male/female characters of three different classes and acquire titles from completing dungeons.  Each dungeon has an RPG element (explore, defeat monsters, acquire items), as well as a puzzle solving element.
                        </span>
                    </div>
                </div> 
                <div className="vin-challenges">
                    <h3 style={{marginBottom: "5px", color: `${color2}`}}>Challenges:</h3>
                    <span>
                        The biggest challenge came in designing the terrain.  There are over 12 different terrain types, each with a different function.  There are also three static elevations, and a fourth elevation which the character can move. All of the terrain types can exist on all of the three static elevations, and the player interacts with the terrain differently depending on its elevation. The fourth elevation is a pushable rock which serves as an intermediary step between elevations 2 and 3.  The pushable rock--the fourth elevation--can also exist on all of the three static elevations. Controlling for all of the edge cases of this dynamic terrain was the most challenging part of the project.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Vindermere;