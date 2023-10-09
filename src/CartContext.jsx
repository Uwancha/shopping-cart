import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    function addToCart(product, quantity) {
        const existing = cart.find(item => item.id === product.id);
        if(existing) {
            setCart(cart.map(item =>
                    item.id === product.id ? {...item, quantity: quantity} : item
            ))
        } else {
            setCart([...cart, {...product, quantity}])
        }       
       
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
)
}