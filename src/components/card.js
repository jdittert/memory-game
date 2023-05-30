import React from 'react';
import '../styles/card.css'
import img1 from '../imgs/img1.svg'
import img2 from '../imgs/img2.svg'
import img3 from '../imgs/img3.svg'
import img4 from '../imgs/img4.svg'

export default function Card(props) {
    const {number} = props;
    const {onClick} = props;    
    const imgArray = ['blank', img1, img2, img3, img4]

    return (
        <div>
            <button className='card'
            onClick={onClick}
            data-number={number}>
                <img src={imgArray[number]} alt={number} data-number={number}/>
            </button>
        </div>
    )
}