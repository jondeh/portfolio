import React from 'react';

const GameRyan = (props) => {
    return (
        <div className="game-ryan-container">
            <div className="game-ryan-info-container">
                <div className="game-ryan-title">GameRyan.com</div>
                <div className="game-ryan-info-body">
                    <div className="game-ryan-built-with">
                        <h3 style={{marginBottom: "5px"}}>Built with:</h3>
                        <span>
                            Built with React, Node, Massive, Express, PostgreSQL, CSS.
                        </span>
                    </div>
                    <div className="game-ryan-summary">
                        <h3 style={{marginBottom: "5px"}}>Summary:</h3>
                        <span>
                            A virtual arcade containing sudoku, tetris, minesweeper, and chess. 
                        </span>
                    </div>
                </div> 
                <div className="game-ryan-challenges">
                    <h3>Challenges:</h3>
                    <span>
                        
                    </span>
                </div>
            </div>
            <div className="game-ryan-pic"></div>
        </div>
    )
}

export default GameRyan;