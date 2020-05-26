import React from 'react';
import {FaGithub} from 'react-icons/fa';

const GameRyan = (props) => {

    let color2 = "darkgreen"

    return (
        <div className="game-ryan-container">
            <div className="game-ryan-info-container">
                <a href="https://gameryan.netlify.app/#/sudoku"><div className="game-ryan-title">Sudoku</div></a>
                <div className="game-ryan-info-body">
                    <div className="game-ryan-built-with">
                        <h3 style={{marginBottom: "5px", color: `${color2}`}}>Built with:</h3>
                        <span>
                            JavaScript, React, Node, Massive, Express, BCrypt, PostgreSQL, SCSS, CSS Grid, FlexBox.
                        </span>
                    </div>
                    <div className="game-ryan-summary">
                        <h3 style={{marginBottom: "5px", color: `${color2}`}}>Summary:</h3>
                        <span>
                            Sudoku puzzle generator and solver.  Generates virtually unique puzzles of easy, medium, or hard difficulty.  Solves easy to expert level puzzles. 
                        </span>
                    </div>
                </div> 
                <div className="game-ryan-challenges">
                    <h3 style={{marginBottom: "5px", color: `${color2}`}}>Challenges:</h3>
                    <span>
                        The biggest challenge on this one was structuring the data correctly.  I built the solver first, and built it so that it could solve very simple puzzles.  When I went to add more methods to it, so that it could solve harder problems, I found that I had structured the data in a way that made it very difficult to debug.  I had to restructure the data, as well as rewrite the functions to make them completely modular, before I could upgrade the solver.  
                    </span>
                </div>
            </div>
            <div className="game-ryan-pic"></div>
        </div>
    )
}

export default GameRyan;