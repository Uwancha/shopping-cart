import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../apis";
import styles from '../styles/products.module.css'
import Loading from "./Loading";

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        console.log("productId:", productId);
        fetchProductDetails(productId).then(data => {
            setProduct(data)
        })
   
    }, [productId]);
  
    if (!product) {
        return <Loading />
    }

    console.log(product)
    
    return (
        <li className={styles.details}>
            <h1 className={styles.h1}>{product.title}</h1>
            <img className={styles.detailImage} src={product.image} alt="" />
            <div className={styles.rateCount}>
                <p>Rate: {product.rating.rate}</p>
                <p>Rate Count: {product.rating.count}</p>
            </div>
            
            <h2 className={styles.h2}>Description</h2>
            <p className={styles.descriptionText}>{product.description}</p>

            <h2 className={styles.h2}>Shipping & Returns</h2>

            <p className={styles.descriptionText}>
                Free shipping. Standard shipping takes 3-5 business days. Express shipping available.
            </p>

            <p className={styles.descriptionText}>
                We offer free 30-day returns. Simply return the item in its original condition within 30 days for a full refund.
            </p>
        </li>
    )
}

export default ProductDetails;