import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import cartIcon from "../assets/cart_3625090.png"
import styles from "../styles/header.module.css"


function Nav() {
    const {cart} = useContext(CartContext);

    return (
        <>
        <div className={styles.header}>
            <h3>Your Online Store</h3>
            <div>
                <Link to="/shop/cart" className={styles.cart}>
                <img src={cartIcon} className={styles.cartIcon} alt="shopping cart image by klimir art" />
                <span className={styles.items}>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                </Link>
            </div>
        </div>
        <nav>
            <div className={styles.links}>
                <Link to= "/" className={styles.link}>Home</Link>
                <Link to="/shop" className={styles.link}>Shop</Link>
                <Link to="/contact" className={styles.link}>Contact</Link>
            </div>
        </nav>
        </>
    )
}

export default Nav;