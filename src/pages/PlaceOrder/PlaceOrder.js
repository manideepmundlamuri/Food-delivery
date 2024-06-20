import React from 'react'
import './PlaceOrder.css'
const PlaceOrder = () => {
    return (
        <>
            <form action="" className='place-order'>
                <div className="place-order-left">
                    <p className="title">Delivary Information</p>
                    <div className="multi-fields">
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                    </div>
                    <input type="email" placeholder='Email address' />
                    <input type="text" placeholder='Street' />
                    <div className="multi-fields">
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder='Zip code' />
                        <input type="text" placeholder='Country' />
                    </div>
                    <input type="text" placeholder='phone' />
                </div>
                <div className="place-order-right">
                    <div className="cart-total">
                        <h2>Cart total</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>{getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery fee</p>
                                <p>₹{20}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>₹{getTotalCartAmount() + 20}</b>
                            </div>
                        </div>
                        <button >PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default PlaceOrder
