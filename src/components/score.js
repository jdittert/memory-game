import React from 'react';

export default function Score({score, highScore}) {

    return (
        <div>
            <div>Score: {score}</div>
            <div>High Score: {highScore}</div>
        </div>
    )
}