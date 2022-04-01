import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {

    const [products, setProducts] = useProducts();
    
    const [cart, setCart] = useCart(products);

    const handleRemoveCart  = (product) => {
 const rest = cart.filter(pd => pd.id !== product.id);
 setCart(rest);
 removeFromDb(product.id);
    }

    return (
        <div className="shop-container">
           <div className="review-container">
               {
                   cart.map(product => <ReviewItem
                   product={product}
                   key={product.id}
                   handleRemoveCart={handleRemoveCart}
                   ></ReviewItem>)
               }

           </div>
           <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/inventory">
                        <button>Procced Cheekout</button>
                    </Link>
                </Cart>
           </div>
        </div>
    );
};

export default Orders;