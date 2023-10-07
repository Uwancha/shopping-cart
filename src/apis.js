async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const response = await res.json();

    return response;
}

async function fetchProductDetails(productId) {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const json = await res.json();
    return json;
}


export { getProducts, fetchProductDetails };