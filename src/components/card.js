import React from 'react';
import '../styles/card.css'
import '../imgs/img1.svg'

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