import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart_3625090.png"
import styles from "../styles/header.module.css"


function Header() {
    return (
        <>
        <div className={styles.header}>
            <h3>Your Online Store</h3>
            <div>
                <Link>
                <img src={cartIcon} className={styles.cartIcon} alt="shopping cart image by klimir art" />
                </Link>
            </div>
        </div>
        <nav>
            <div className={styles.links}>
                <Link to= "/" className={styles.link}>Home</Link>
                <Link to="/shop" className={styles.link}>Shop</Link>
                <Link to="/about" className={styles.link}>About</Link>
            </div>
        </nav>
        </>
    )
}

export default Header;