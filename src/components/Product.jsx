import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/products.module.css'

function Product({product}) {
    
    return (
        <li className={styles.li}>
            <img className={styles.img} src={product.image} alt="" />
            <div className={styles.detailPrice}>
                <h2>Price: ${product.price}</h2>
                <Link to={`/shop/${product.id}`}  className={styles.link}>See details</Link>
            </div>
            <button className={styles.addToCart}>Add to cart</button>
        </li>
    )
}

export default Product;