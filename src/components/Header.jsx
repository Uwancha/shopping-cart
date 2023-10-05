import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart_3625090.png"
import styles from "../styles/header.module.css"


function Header() {
    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                <Link to= "/" className={styles.link}>Home</Link>
                <Link to="/shop" className={styles.link}>Shop</Link>
                <Link to="/about" className={styles.link}>About</Link>
            </div>
            <div>
                <Link>
                <img src={cartIcon} className={styles.cartIcon} alt="shopping cart image by klimir art" />
                </Link>
            </div>
        </nav>
    )
}

export default Header;