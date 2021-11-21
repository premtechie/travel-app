import React,{useState} from 'react'
import '../../Styles/Components/card.scss'
import img from '../../Components/Images/place-1.png';
import messageSquare from '../../Components/Images/message-square.svg';
import heart from '../../Components/Images/heart-1.svg';
import classNames from 'classnames';

function Card(props) {
    const {item,index,checked,handleCheck,view} = props

    function checkFunction(){
        if(item.checked === true){
            item.checked = false
        }
        else{
            item.checked = !item.checked
        }
        handleCheck(item,index);
    }
    return (
        <div className={classNames({["cardSelected"]:item.checked === true,['cardListView']:view === 1}," card")} onClick={()=>checkFunction()}>
            <div className='card-sec'>
                <img src={item.path} className='place' />
                <div className='label-container'>
                    {
                        item && item.labels && item.labels.map((labeVal)=>(
                            <span className='label'>{labeVal}</span>
                        ))
                    }
                </div>
                <label className='card-title'>
                    {item.contenet}
                </label>
                <div className='card-content'>
                    {item.contenetText}
                </div>
            </div>
            
            <div className='icon-click-wrapper'>
                    <img src={messageSquare} className='icon' alt='' />
                    <img src={heart} className='icon' alt='' />
            </div>
            <label className="container"><div className='terms-text'></div>
                <input type="checkbox" checked={item.checked} />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default Card
