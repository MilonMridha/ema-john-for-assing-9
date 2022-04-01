import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './RviewItem.css'
const ReviewItem = (props) => {

    const {handleRemoveCart, product} =props;
    const {name, price, shipping, quantity, img} = product;
    return (
        <div className= "review-item">
            <div className='item-img'>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details'>
                <div className='item-info'>
                    <p title={name}>   {name.length > 20 ? name.slice(0,20) + '...': name}</p>
                  
                    <p>Price : ${price}</p>
                    <p>Shipping Charge: ${shipping}</p>
                </div>
                <div className='delete-item'>
                    <button onClick={() => handleRemoveCart(product)} className='delete-btn'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
          
        </div>
    );
};

export default ReviewItem;