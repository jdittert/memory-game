import React, { useState } from 'react';

export default function Score() {
    const [score, setScore] = useState(0);

    /* Keep track of the high score */
    let highScore = 0;

    const incrementScore = () => {        
        setScore(score + 1);
        if (score >= highScore) {
            highScore = score;
        }        
    };    

    const resetScore = () => {
        setScore(0);
    }    

    return (
        <div>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
            <div>
                <button onClick={incrementScore}>GET MORE SCORE</button>
            </div>
            <div>
                <button onClick={resetScore}>NO MORE SCORE</button>
            </div>
        </div>
    )
}