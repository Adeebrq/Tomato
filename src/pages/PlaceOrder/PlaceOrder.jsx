import React, { useContext } from 'react';
import './Placeorder.css';
import { StoreContext } from '../../context/storeContext';

const PlaceOrder = () => {
  const {getTotalCartAmount}= useContext(StoreContext);

  return (
    <form className='placeorder'>
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='email address'/>
        <input type="text" placeholder='street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zipcode' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone number:' />

      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart total</h2>
        <div>
        <div className="cart-total-details">
          <p>Subtotal:</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery fee:</p>
          <p>${getTotalCartAmount()===0?0:5}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total:</p>
          <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</p>
        </div>
        <hr />
      </div>
      <button>PROCEED TO PAYMENT</button>
      </div> 
          
      </div>
      
    </form>
  )
}

export default PlaceOrder
