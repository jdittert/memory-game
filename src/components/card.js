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
                <img src={`../imgs/img${number}.svg`} alt={number} data-number={number}/>
            </button>
        </div>
    )
}