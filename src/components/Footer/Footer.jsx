import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/asset';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Discover the best dishes in town delivered right to your door. Whether you're craving a hearty meal, a light snack, or something in between, we've got you covered. Explore our diverse menu and order with ease!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-234-567-8901</li>
                        <li>contact@foodfleet.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">
                <p>&copy;2024 <strong>FoodFleet</strong>. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
