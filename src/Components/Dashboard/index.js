import React,{Component, useState} from 'react'
import ViewContainer from '../ViewContainer';
import '../../Styles/Components/dashboard.scss';
import Card from '../Card';
import place1 from '../../Components/Images/place-1.png';
import place2 from '../../Components/Images/place-2.png';
import place3 from '../../Components/Images/place-3.png';
import place4 from '../../Components/Images/place-4.png';
import place5 from '../../Components/Images/place-5.png';
import place6 from '../../Components/Images/place-6.png';
import place7 from '../../Components/Images/place-7.png';
import place8 from '../../Components/Images/place-8.png';
import logo from '../../Components/Images/logo.svg';
import menu from '../../Components/Images/menu.svg';

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state={
            viewState:0,
            cardData:[
                {path:place2,contenet:"Khartoum",contenetText:"Aenean lacinia bibendum nulla sed consectetur.",labels:["Wellington","Tianjin"],checked:false},
                {path:place1,contenet:"Santa Clara",contenetText:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",labels:["Salt Lake City","Seville"],checked:false},
                {path:place3,contenet:"Bengaluru",contenetText:"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",labels:["Puebla"],checked:false},
                {path:place4,contenet:"Portland",contenetText:"Tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",labels:["Sacramento","Osaka","Astana"],checked:false},
                {path:place5,contenet:"Fairbanks",contenetText:"Pellentesque ornare sem lacinia quam venenatis vestibulum.",labels:["Belgrade","Cali","Stockholm"],checked:false},
                {path:place6,contenet:"Sofia",contenetText:"Pellentesque ornare sem lacinia quam venenatis vestibulum.",labels:["Trondheim","Xian"],checked:false},
                {path:place7,contenet:"Belfast",contenetText:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.",labels:["Aarhus","Ankara"],checked:false},
                {path:place8,contenet:"Pune",contenetText:"Mauris condimentum nibh, ut fermentum massa justo sit amet risus.",labels:["Sylhet"],checked:false},
            ]
        }
    }

    checkHandler(val,i){
        const {cardData} = this.state;
        const elementsIndex = this.state.cardData.findIndex(element => element.contenet == val.contenet)
        let newArray = [...this.state.cardData];
        console.log(newArray[elementsIndex].checked)
        this.setState({
            cardData: newArray,
            });
    }
    render(){
        const {cardData,viewState,checkedVal} = this.state
    return (
        <div className='dashboard-wrapper'>
            <div className='header-wrapper'>
                <div className='header-title'>Discover great places to visit <ViewContainer selectedView={viewState} viewChangeHandler={(val) => this.setState({viewState:val})} /></div>
                <img src={logo} alt='' className='show-logo' />
                <img src={menu} alt='' className='show-menu' />
            </div>
            <div className='card-wrapper'>
                {
                    cardData.map((cardItem,i)=>(
                        <Card item={cardItem} key = {i} index = {i} view={viewState}  handleCheck={(val,index)=>this.checkHandler(val,index)} />
                    ))
                }
            </div>
        </div>
    )}
}

export default Dashboard;
