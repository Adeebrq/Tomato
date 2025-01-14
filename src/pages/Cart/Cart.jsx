import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/storeContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-items">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p> {/*to calculate the quantity of items*/}
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
      <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div> 
      <div className="cart-promocode">
        <div>
          <p>If you have an promocode enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Cart;
