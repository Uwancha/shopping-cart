import React from "react";
import Product from "./Product";
import styles from '../styles/products.module.css'
import Loading from "./Loading";

function Products({products}) {

  return (
    <ul className={styles.ul}>
        {products.length === 0 ? <Loading />: (
            products.map(product => (
                <Product product={product} />
            )) 
        )}
    </ul>
  )
}

export default Products
