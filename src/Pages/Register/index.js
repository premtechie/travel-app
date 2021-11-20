import React,{useState} from 'react'
import Input from '../../Components/Input'
import userIcon from '../../Components/Images/icon.svg'
import atIcon from '../../Components/Images/at-icon.svg'
import arrow from '../../Components/Images/arrow.svg';
import lock from '../../Components/Images/lock.svg';
import logo from '../../Components/Images/logo.svg';

import './styles.scss';

function Register() {

    const [nameValue,setNameValue] = useState("")
    const [emailValue,setEmailValue] = useState("")
    const [passwordValue,setPasswordValue] = useState("")
    const [checkValue,setCheckValue] = useState(false)
    return (
        <div className='register-layout' >
            <div className='input-wrapper-container' >
                <div className='input-container'>
                    <div className='card-title'>Let’s Get Started.</div>
                    <div className='card-content'>Discover the best places in the world <br /> at your fingertips!</div>
                    <Input icon={userIcon} type={"text"} value={nameValue} handler={(e)=>setNameValue(e.target.value)} />
                    <Input icon={atIcon} type={"email"} value={emailValue} handler={(e)=>setEmailValue(e.target.value)} />
                    <Input icon={lock} type={"password"} value={passwordValue} handler={(e)=>setPasswordValue(e.target.value)} />
                    <div className='terms-container'>
                        <input type='checkbox' checked={checkValue} onChange={()=>setCheckValue(!checkValue)}  className='check' />
                        <label className='terms' >I agree to the <a  >Terms</a> and <a >Privacy Policy</a>.</label>
                    </div>
                </div>
                <div className='end-container'>
                    <div>
                        <button className='button-container' onClick={()=>console.log(nameValue,emailValue,passwordValue,checkValue)} >
                            <div className='btn-text' >{"SIGN UP"}</div>
                            <img src={arrow} className='arrow' />
                        </button>
                    </div>
                </div>
                
            </div>
            <div className='side-wrapper'>
                <img src={logo} className='logo' />
            </div>
        </div>
    )
}

export default Register
