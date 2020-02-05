export const setProducts = (products = null) =>{
    sessionStorage.setItem('products', JSON.stringify(products));
    return {
        type: 'PRODUCTS',
        payload: products
    };
};