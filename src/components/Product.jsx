import React from "react";
import styles from '../styles/products.module.css'

function Product({product}) {
    
    return (
        <li className={styles.li}>
            <img className={styles.img} src={product.image} alt="" />
            <div className={styles.detailPrice}>
                <h2>Price: ${product.price}</h2>
                <button className={styles.button}>Details</button>
            </div>
        </li>
    )
}

export default Product;