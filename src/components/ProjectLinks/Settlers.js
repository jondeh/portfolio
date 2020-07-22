import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Settlers = (props) => {

    let color2 = "darkgreen"

    return (
        <div className="settlers-container">
            <div className="settlers-info-container">
                <div className="settlers-title">Settlers of Catan<a href="https://github.com/Aposhian-Dehlin-Buford/settlers"><FaGithub /></a></div>
                <div className="settlers-info-body">
                    <div className="settlers-built-with">
                        <h3 style={{marginBottom: "5px", color: `${color2}`}}>Built with:</h3>
                        <span>
                            JavaScript, React (Hooks), Node, Massive, Express, BCrypt, PostgreSQL, SCSS, CSS Grid, FlexBox, GreenSock, sockets.
                        </span>
                    </div>
                    <div className="settlers-summary">
                        <h3 style={{marginBottom: "5px", color: `${color2}`}}>Summary:</h3>
                        <span>
                            Full two player Settlers of Catan.  Start by alternating placing first and second settlements and roads.  Go until one player reaches 10 points.  Game is fully functional for two players.
                        </span>
                    </div>
                </div> 
                <div className="settlers-challenges">
                    <h3 style={{marginBottom: "5px", color: `${color2}`}}>Challenges:</h3>
                    <span>
                        Working with a hexagonal grid proved to be very challenging for this project, particularly because each hexagon also needed to have six slots each for both roads and settlements, and those roads/settlements needed to know how to interact with the adjacent hexagonal tiles.  This is fairly simple when working with square grids, but with hexagons it isn't obvious how each tile connects to its neighbors behind the scenes.  This made a few things challenging, such as disabling settlement slots that are one slot away from a newly built settlement.  Definitely challenged me to architect better.  This is my first project using sockets as well, and it was a good project to learn because they are used so often.   
                    </span>
                </div>
            </div>
            <div className="settlers-pic"></div>
        </div>
    )
}

export default Settlers;