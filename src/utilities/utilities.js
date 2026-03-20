// Get Cart Data From Local Storage
const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    else {
        return [];
    }
}

// Save Cart Data To Local Storage
const saveCartToLocalStorage = (cartData) => {
    const cartStringified = JSON.stringify(cartData);
    localStorage.setItem('cart', cartStringified);
}

// Remove Cart Item from local storage
const removeCartItem = (appId) => {
    const cart = getCartFromLocalStorage();
    const remainingCartItems = cart.filter(items => items !== appId);

    saveCartToLocalStorage(remainingCartItems);
}

// Add Cart Data To Local Storage
const addCartToLocalStorage = (appId) => {
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, appId];

    // Save cart
    saveCartToLocalStorage(newCart);
}

export {
    addCartToLocalStorage as addCart,
    getCartFromLocalStorage as getCart,
    removeCartItem as removeCart
}