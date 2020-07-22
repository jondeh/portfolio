import React, {useState, useEffect} from 'react';
import Vindermere from '../ProjectLinks/Vindermere';
import GameRyan from '../ProjectLinks/GameRyan';
import ChordFinder from '../ProjectLinks/ChordFinder';
import LandingPage from '../LandingPage/LandingPage';
import Settlers from '../ProjectLinks/Settlers';
import './Body.css';
import './Hexagon.css';


const Body = (props) => {
    const [hexagons, setHexagons] = useState([])

    useEffect(() => {
        const hexagons = []
        for(let col = 0; col < 100; col++){
            const currentRow = []
                for(let row = 0; row < 100; row++){
                    const currentNode = {
                        col,
                        row,
                    }
                    currentRow.push(currentNode)
                }
                hexagons.push(currentRow)
            }
            setHexagons(hexagons)
    }, [])
    return (
        <div className='body-container'>
            <LandingPage />
            <Settlers />
            <Vindermere />
            <GameRyan />
            <ChordFinder />
            <div className="hex-container">
                {
                
          hexagons.map((e,i) => {
              return <div className="container-rows">
                  {
                      e.map((f,j) => {
                      return <button className={j % 2 !== 0 ? `hexagon-odd` : `hexagon`}></button>
                      })
                  }
              </div>
          })
        }
            </div>
            
        </div>
    )
}

export default Body;