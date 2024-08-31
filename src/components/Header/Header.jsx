import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favorite food here!</h2>
            <p>Craving something delicious? With FoodFleet, your favorite meals are just a tap away! Experience fast, reliable delivery and explore a world of culinary delights from top local restaurants. Satisfy your taste buds effortlessly—anytime, anywhere. Food has never been this easy and exciting!</p>
            <a href="#exploreMenu"><button href='#exploreMenu'>Order now!</button></a>
        </div>
    </div>
  )
}

export default Header;
