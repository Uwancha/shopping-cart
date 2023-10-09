import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function Cart() {
    const {cart} = useContext(CartContext)

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <div>
            {cart.length > 0 && (
            <>
                <h3>Added Items</h3>
       
                {cart.map(item => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                    )) }

                <p>Total: ${totalPrice}</p>

                <button>Checkout</button>
            </>
            ) }

            {cart.length === 0 && <h4>Cart is empty</h4>}
        </div>
    )
}

export default Cart;