import { getStoredCart } from "../utilities/fakedb";

export const productsCartLoader = async () => {

    //get products
    const produtsData = await fetch('products.json');
    const products = await produtsData.json();

    // get cart
    const savedCart = getStoredCart();
    const initialCart = [];
    // console.log('saved cart', savedCart)
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id)
        // console.log(addedProduct)
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }
 

    return {products, initialCart};
}