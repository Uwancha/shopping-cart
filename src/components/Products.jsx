import React, { useMemo } from "react";
import Product from "./Product";
import styles from '../styles/products.module.css'
import Loading from "./Loading";

function Products({products}) {

    const memoizedProducts = useMemo(() => {
        return products;
    }, [products])

  return (
    <ul className={styles.ul}>
        {memoizedProducts.length === 0 ? <Loading />: (
            memoizedProducts.map(product => (
                <Product product={product} />
            )) 
        )}
    </ul>
  )
}

export default Products
