import React, { useState, useEffect, } from "react";
import getProducts from "../apis";
import Products from "./Products";

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts().then(products => {
            setProducts(products);
        })

    }, [])

  return (
    <Products products={products} />
  )
}

export default Shop;