import React, { useState } from 'react';
import "./LoginPopup.css";
import { assets } from '../../assets/asset';

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState]= useState("Sign up")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
                <button>{currState=== "Sign up"?"create account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing I agree to the terms of use & privacy policy</p>
                </div>
                {currState==="Login"
                ?<p>Create an new account? <span onClick={()=> setCurrState("Sign up") }> Click here</span></p>
                :<p>Already have an account? <span onClick={()=> setCurrState("Login") }> Click here</span></p>
                }
            </div>
        </form>
    </div>
  );
};
export default LoginPopup;
