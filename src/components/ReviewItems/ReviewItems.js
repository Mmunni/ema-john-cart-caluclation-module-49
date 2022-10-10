import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItems.css';
const ReviewItems = ({product, reviewHandeler}) => {
    const {img, price, name, quantity, id} = product;
    return (
        <div>
            <div className="review-itemd">
                <div>
                <img src={img} alt="" />
                </div>
                <div className="review-details-container">
                    <div className="review-details">
                        <p>{name}</p>
                        <p><small>Price: <span>${price}</span></small></p>
                        <p><small>Quantity: <span>${quantity}</span></small></p>
                    </div>
                    <div className="delete-btn">
                        <button onClick={() => reviewHandeler(id)}>
                             <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
            </div>
            .
        </div>
    );
};

export default ReviewItems;