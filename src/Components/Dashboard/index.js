import React,{useState} from 'react'
import ViewContainer from '../ViewContainer';
import '../../Styles/Components/dashboard.scss';
import Card from '../Card';

function Dashboard() {

    const [viewState,setViewState] = useState(0);

    return (
        <div className='dashboard-wrapper'>
            <div className='header-wrapper'>
                <h4 className='header-title'>Discover great places to visit</h4>
                <ViewContainer selectedView={viewState} viewChangeHandler={(val) => setViewState(val)} />
            </div>
            <div className='card-wrapper'>
                <Card />
            </div>
        </div>
    )
}

export default Dashboard;
