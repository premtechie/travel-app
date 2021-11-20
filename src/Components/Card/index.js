import React,{useState} from 'react'
import '../../Styles/Components/card.scss'
import img from '../../Components/Images/place-1.png';


function Card(props) {
    return (
        <div className='card'>
            <img src={img} className='place' />
            <div className='label-container'>
                <span className='label'>SALT LAKE CITY</span>
                <span className='label'>SEVILLE</span>
            </div>
        </div>
    )
}

export default Card
