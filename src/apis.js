async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const response = await res.json();

    return response;
}

export default getProducts;