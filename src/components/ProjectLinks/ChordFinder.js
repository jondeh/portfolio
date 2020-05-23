import React from 'react';
import {FaGithub} from 'react-icons/fa';

const Vindermere = (props) => {
    let color2 = "darkgreen"
    return (
        <div className="chord-finder-container">
            <div className="chord-finder-pic"></div>
            <div className="chord-finder-info-container">
                <div className="chord-finder-title">Chord Finder<a href="https://github.com/jondeh/no-db"><FaGithub /></a></div>
                <div className="chord-finder-info-body">
                    <div className="chord-finder-built-with">
                        <h3 style={{marginBottom: "5px", color: `${color2}`}}>Built with:</h3>
                        <span>
                            JavaScript, React, Node, Massive, Express, PostgreSQL, CSS Grid, and Flexbox.
                        </span>
                    </div>
                    <div className="chord-finder-summary">
                        <h3 style={{marginBottom: "5px", color: `${color2}`}}>Summary:</h3>
                        <span>
                            Virtual interactive guitar fretboard.  Click the notes on the fretboard, and which strings to play, and the app will display the name of the chord.
                        </span>
                    </div>
                </div> 
                <div className="chord-finder-challenges">
                    <h3 style={{marginBottom: "5px", color: `${color2}`}}>Challenges:</h3>
                    <span>
                        There is some tricky CSS in this one.  The fretboard that you see is multiple grids overlayed on top of each other to give it the effect of strings running down the middle of the notes.  Getting the details of that design right was tricky.  Working with the public music API which fetches the chords was challenging as well, as this was my first project working with a public API.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Vindermere;