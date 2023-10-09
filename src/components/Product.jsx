import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import styles from '../styles/products.module.css'

function Product({product}) {
    const [quantity, setQuantity] = useState(1) 
    const { addToCart } = useContext(CartContext);
    
    return (
        <li className={styles.li}>
            <img className={styles.img} src={product.image} alt="" />
            <div className={styles.detailPrice}>
                <h2>Price: ${product.price}</h2>
                <Link to={`/shop/${product.id}`}  className={styles.link}>See details</Link>
            </div>
            <div className={styles.addQuantity}>
                <button onClick={() => addToCart(product, quantity)} className={styles.addToCart}>Add to cart</button>
                <div className={styles.items}>
                    <button onClick={() => setQuantity(prev => prev + 1)} className={styles.quantity}>+</button>
                    <span className={styles.span}>{quantity}</span>
                    <button onClick={() => setQuantity(prev => prev - 1)} className={styles.quantity}>-</button>
                </div>
            </div>
        </li>
    )
}

export default Product;