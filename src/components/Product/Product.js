import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    readonly
                ></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular'
                >{element}add to cart</button>
            </div>
        </div>
    );
};

export default Product;