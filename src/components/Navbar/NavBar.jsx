import React, { useState, useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/asset";
import { StoreContext } from '../../context/storeContext'


const NavBar = ({setShowLogin})=>{

    const [menu, setMenu]= useState("home")
    
    const {getTotalCartAmount } = useContext(StoreContext);

    return(
        <div className="navbar">
            <Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href='#exploreMenu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                <a href='#app-download'  onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
            </ul>
            <div className="navbar-right">
                {/* <img src={assets.search_icon} alt="" /> */}
                <div className="navbar-search-icon">
                   <Link to="/cart"><img src={assets.basket_icon} alt=""/></Link> 
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>   {/* HAVE TO ADJUST used to add a notification like effect on top of the basket */}
                </div>
                <button onClick={()=>setShowLogin(true)}>sign in</button>
            </div>
        </div>

    );
}

export default NavBar;