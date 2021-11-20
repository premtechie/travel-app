import React,{useEffect, useState} from 'react'
import greenTickIcon from '../Images/green-tick.svg';
import wrong from '../Images/wrong-icon.svg';
import classNames from 'classnames';
import '../../Styles/Components/input.scss';

function Input(props) {
    const {type,icon,value, handler} = props;
    const [showErrorTick,setErrorTick] = useState("");
    const [showErrorMsg,setErrorMsg] = useState("");
    const [nameErrorMsg,setNameError] = useState("")
    const [emailErrorMsg,setEmailError] = useState("")

    useEffect(()=>{
        if(type === 'name'){
            value.length > 5 && setErrorTick(false);
        }
        else if(type === 'password'){
            const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            value.length > 5 && setErrorTick(!re.test(value))
        }
    },[value])
    let placeHolderText = type === 'text' ? "Name" : type === 'email' ? "Email" : "Password";


    function handleErrorState(){
        if(type=== 'password'){
            const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            setErrorTick(!re.test(value))
            !re.test(value) ? setErrorMsg("Password should contain atleast 6 charecters") : setErrorMsg("")
        }
        else if(type === 'email'){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            setErrorTick(!re.test(String(value).toLowerCase()));
            if(re.test(String(value).toLowerCase()) === true){
                setEmailError("")
                setErrorTick(false)
            }
            else{
                setEmailError("Invalid Email ID")
                setErrorTick(true)
            }
        }
        else{
            if(value.length < 5){
                setErrorTick(true)
                setNameError("Name should have more that 5 charecters")
            }
            else{
                setErrorTick(false)
                setNameError("")
            }
        }
    }

    return (
        <div className='input-wrapper'>
            <div className={classNames({["warning-field"]:showErrorMsg || nameErrorMsg || emailErrorMsg},"input-field")}>
                <img src={icon} className='user-icon' alt='icon' />
                <input value={value} onChange={handler} onBlur={()=>handleErrorState()} className='input' autoComplete="off" placeholder={placeHolderText} type={type}  />
                {showErrorTick && <img src={wrong} />}
                {showErrorTick === false && <img src={greenTickIcon} className='green-tick' />}
            </div>
            {type === 'password' &&  <label className='warning-label' >{showErrorMsg}</label>}
            {type === 'text' && nameErrorMsg && <label className='warning-label' >{nameErrorMsg}</label>}
            {type === 'email' && emailErrorMsg &&<label className='warning-label' >{emailErrorMsg}</label>}
        </div>
    )
}

export default Input
