import React from 'react'
import Dashboard from '../../Components/Dashboard';
import SideBar from '../../Components/Sidebar';
import '../../Styles/Components/home.scss';

function Home() {
    return (
        <div className='home-wrapper'>
            <SideBar />
            <Dashboard />
        </div>
    )
}

export default Home;
