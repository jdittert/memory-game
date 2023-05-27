import React, { useState } from 'react';
import Score from './components/score';
import Card from './components/card';
import './styles/App.css';

const App = () => {
    const numbers = [1, 2, 3, 4]
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clicked, setClicked] = useState([]);
    
    const updateScore = (e) => {
        const {number} = e.target.dataset;
        if (clicked.includes(number)) {
            setScore(0);
            setClicked([]);
        } else {
            const newScore = score + 1;
            if (newScore >= highScore) {
                setHighScore(newScore);
            }
            setScore(newScore);
            setClicked(clicked.concat(number));
        }
        
    }

    const resetScore = () => {
        setScore(0);
        setClicked([]);
    }    

    return (
        <div>
            <div><Score score={score} highScore={highScore} /></div>
            <div className='memory-cards'>
                {numbers.map((number) => {
                    return (
                        <div key={number}><Card number={number} onClick={updateScore} /></div>
                    )
                }
                )}
            </div>
            <div>
                <button onClick={resetScore}>Reset Score</button>
            </div>
        </div>
    )
} 

export default App;
