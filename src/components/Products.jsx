import React, { useMemo } from "react";
import Product from "./Product";
import styles from '../styles/products.module.css'

function Products({products}) {

    const memoizedProducts = useMemo(() => {
        return products;
    }, [products]) 

  return (
    <ul className={styles.ul}>
        {memoizedProducts.length === 0 ? <h5>Loading...</h5>: (
            memoizedProducts.map(product => (
            <div>
                <Product product={product} />
            </div>
            )) 
        )}
    </ul>
  )
}

export default Products
