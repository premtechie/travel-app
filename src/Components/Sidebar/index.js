import React,{useState} from 'react'
import  '../../Styles/Components/sidebar.scss';
import logo from '../Images/logo.svg';
import home from '../Images/home.svg';
import discover from '../Images/compass.svg';
import briefcase from '../Images/briefcase.svg';
import gear from '../Images/gear.svg';
import bell from '../Images/bell.svg';
import logout from '../Images/log-out.svg';
import classNames from 'classnames';

function SideBar(props) {

    const [selectedItem,setItem] = useState(0)

    const sideBarData = [{path:home},{path:discover},{path:briefcase},{path:gear},{path:bell}]
    console.log(selectedItem)

    return (
        <div className='sidebarWrapper'>
           <div className='sectionOne' >
                <div className='logo-container'>
                    <img src={logo}  alt='' className='icon' />
                </div>
                {
                    sideBarData.map((data,i)=>(
                        <div key={i} className={classNames({["selected-container"]:selectedItem === i},"icon-container")} onClick={()=>setItem(i)} >
                            <img src={data.path}  alt='' className='icon' />
                        </div>
                    ))
                }
           </div>
           <div className='sectionTwo'>
                <div className='icon-container'>
                    <img src={logout} alt='' className='icon'  />
                </div>
           </div>
            
        </div>
    )
}

export default SideBar;
