import React from 'react';
import '../../Styles/Components/viewWrapper.scss';
import grid from '../Images/grid-view-icon.svg';
import list from '../Images/list-view-icon.svg';
import classNames from 'classnames';

function ViewContainer(props) {

    const {selectedView,viewChangeHandler} = props;
    const data = [{path:grid},{path:list}];

    return (
        <div className='view-wrapper' >
            {
                data.map((item,i)=>(
                    <div key={i} onClick={()=>viewChangeHandler(i)} className={classNames({["selectedListIcon-container"]:selectedView === i},"listIcon-container")}>
                        <img className='icon' src={item.path} />
                    </div>
                ))
            }
        </div>
    )
}

export default ViewContainer
