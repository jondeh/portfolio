import React from 'react';

const Vindermere = (props) => {
    return (
        <div className="chord-finder-container">
            <div className="chord-finder-pic"></div>
            <div className="chord-finder-info-container">
                <div className="chord-finder-title">Chord Finder</div>
                <div className="chord-finder-info-body">
                    <div className="chord-finder-built-with">
                        <h3 style={{marginBottom: "5px"}}>Built with:</h3>
                        <span>
                            React, Node, GreenSock, Massive, Express, PostgreSQL, SCSS.
                        </span>
                    </div>
                    <div className="chord-finder-summary">
                        <h3 style={{marginBottom: "5px"}}>Summary:</h3>
                        <span>
                            A virtual arcade containing sudoku, tetris, minesweeper, and chess. 
                        </span>
                    </div>
                </div> 
                <div className="chord-finder-challenges">
                    <h3>Challenges:</h3>
                    <span>
                        
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Vindermere;