import React from 'react';
import Vindermere from '../ProjectLinks/Vindermere';
import GameRyan from '../ProjectLinks/GameRyan';
import ChordFinder from '../ProjectLinks/ChordFinder';
import LandingPage from '../LandingPage/LandingPage';
import './Body.css';

const Body = (props) => {
    return (
        <div className='body-container'>
            <LandingPage />
            <Vindermere />
            <GameRyan />
            <ChordFinder />
        </div>
    )
}

export default Body;