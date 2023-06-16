import React from 'react'
import OneProduct from './OneProduct'
import Home from './Home'
import Cart from './Cart'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useState } from 'react'

const ProductList = () => {
  const [products, setProducts] = useState([])

  const addToCart = (item) => {
    //console.log(item)
    // pasidarome duomenu kopija ir su kopija atliekame veiksmus
    const newCart = [...products]
    // gali reiketi lokalaus , laikino kintamojo
    // tikrinti per krepseli,ar tokia preke yra
    let productInCart = newCart.find(
      (tempProduct) => item.name === tempProduct.name
    )
    //console.log(productInCart)
    // tikrinti per duomenis, ar pakanka likucio
    // jei nera, pridedu nauja preke
    // jei yra, padidnu prekes kieki krepselyje
    // jei nepakanka likucio - pranesimas vartotojui"truksta likucio"
    if (productInCart === undefined && item.countInStock > 0) {
      productInCart = {
        ...item,
        quantity: 1,
      }
      newCart.push(productInCart)
      alert('Product added to Cart')
    } else if (productInCart && productInCart.quantity < item.countInStock) {
      productInCart.quantity++;
      alert('Product added to Cart')
    } else {
      alert('Product quantity unavailable')
    }

    // uzsetinti nauja krepseli i state newProducts(newCart)
    setProducts(newCart)
  }

  const increaseQuantity = (item) => {
    const newCart = [...products];
    let productInCart = newCart.find(
        (tempProduct) => item.name === tempProduct.name
      )
      if (productInCart && productInCart.quantity < item.countInStock) {
        productInCart.quantity++;
      } else {
        alert('Product quantity unavailable')
      }
      setProducts(newCart);
    }
    const decreaseQuantity = (item) => {
        const newCart = [...products];
    let productInCart = newCart.find(
        (tempProduct) => item.name === tempProduct.name
      )
      if (productInCart && productInCart.quantity > 1 ){
        productInCart.quantity--;
        setProducts(newCart);
      } else {
        setProducts(newCart.filter(tempItem => tempItem !== item));      ;
      }
    }
    const deleteProduct = (item) => {
        const newCart = [...products];
        setProducts(newCart.filter(tempItem => tempItem !== item ));
    }

    const clearCart = () => {
        console.log('clearCart')
        setProducts([]);

    }
  //console.log(products)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<OneProduct addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart products={products} 
      increaseQuantity={increaseQuantity} 
      decreaseQuantity={decreaseQuantity} 
      deleteProduct={deleteProduct}
      clearCart={clearCart}/>} />
    </Routes>
  )
}

export default ProductList
