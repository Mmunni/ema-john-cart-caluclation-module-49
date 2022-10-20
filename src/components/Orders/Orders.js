import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const {products, initialCart} = useLoaderData();
   const [cart, setCart] = useState(initialCart)
   const reviewHandeler = (id) => {
    const remaining = cart.filter(product => product.id !== id)
    setCart(remaining);
    removeFromDb(id);

}
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
}
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItems 
                        key={product.id}
                        product={product}
                        reviewHandeler={reviewHandeler}
                    ></ReviewItems>)
                }
                {
                    cart.length == 0 && <h1>No more item selected.. For selecting Items visit <Link to ="/">Shop</Link></h1>
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/shipping">
                        <button>Shipping Product</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;