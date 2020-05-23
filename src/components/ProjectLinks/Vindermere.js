import React from 'react';

const Vindermere = (props) => {
    return (
        <div className="vindermere-container">
            <div className="vin-pic"></div>
            <div className="vin-info-container">
                <a href="http://vindermere.com/#/"><div className="vin-title">Vindermere.com</div></a>
                <div className="vin-info-body">
                    <div className="vin-built-with">
                        <h3 style={{marginBottom: "5px"}}>Built with:</h3>
                        <span>
                            React, Node, GreenSock, Massive, Express, PostgreSQL, SCSS.
                        </span>
                    </div>
                    <div className="vin-summary">
                        <h3 style={{marginBottom: "5px"}}>Summary:</h3>
                        <span>
                            A traditional top-down, fantasy-style, dungeon crawler. 
                        </span>
                    </div>
                </div> 
                <div className="vin-challenges">
                    <h3>Challenges:</h3>
                    <span>
                        
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Vindermere;