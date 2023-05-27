import React from 'react';
import '../styles/card.css'

export default function Card(props) {
    const {number} = props;
    const {onClick} = props;

    return (
        <div>
            <button className='card'
            onClick={onClick}
            data-number={number}>
                {number}
            </button>
        </div>
    )
}