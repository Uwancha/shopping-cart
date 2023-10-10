import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import styles from "../styles/cart.module.css"
import { Link } from "react-router-dom";

function Cart() {
    const {cart} = useContext(CartContext)

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <div className={styles.cartItems}>
            {cart.length > 0 && (
            <>
                <h3 className={styles.pageTitle}>Added Items</h3>
       
                {cart.map(item => (
                    <Link to={`/shop/${item.id}`} className={styles.link}>
                        <div key={item.id} className={styles.cart}>
                            <div className={styles.imgContainer}>
                                <img src={item.image} alt={item.title}  className={styles.img}/>
                            </div>
                            <div className={styles.titlePrice}>
                                <p>{item.title}</p>
                                <p>Subtotal: {item.price * item.quantity}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        
                            <button className={styles.removebtn} >Remove</button>
                        
                        </div>
                    </Link>
                    )) }

                <p className={styles.total}>Total: ${totalPrice}</p>

                <button className={styles.checkoutbtn}>Checkout</button>
            </>
            ) }

            {cart.length === 0 && <h2 className={styles.emptyCart}>No item added</h2>}
        </div>
    )
}

export default Cart;