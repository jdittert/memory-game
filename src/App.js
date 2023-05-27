import React, { useState } from 'react';
import Score from './components/score';
import Card from './components/card';
import './styles/App.css';

const App = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clicked, setClicked] = useState([]);
    
    const updateScore = (e) => {
        const {number} = e.target.dataset;
        if (clicked.includes(number)) {
            shuffleArray();
            setScore(0);
            setClicked([]);
        } else {
            const newScore = score + 1;
            if (newScore >= highScore) {
                setHighScore(newScore);
            }
            shuffleArray();
            setScore(newScore);
            setClicked(clicked.concat(number));
        }        
    }

    const resetScore = () => {
        setScore(0);
        setHighScore(0);
        setClicked([]);
    }

    const shuffleArray = () => {
        let unshuffled = [...numbers];

        let shuffled = unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        
        setNumbers(shuffled);
    }

    return (
        <div className='wrapper'>
            <div className='instructions'>
                Instructions: Click on a card to score 1 point. If you click on a card twice, your score resets to zero!
            </div>
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
                <div>
                    These buttons exist just to prove their functionality.
                </div>
                <div className='function-buttons'>
                    <button onClick={resetScore}>Reset All Scores</button>
                    <button onClick={shuffleArray}>Shuffle Array</button>
                </div>
            </div>
            </div>
    )
} 

export default App;
