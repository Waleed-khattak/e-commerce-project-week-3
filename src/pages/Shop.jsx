import React from 'react'
import Products from '../components/Products'

const Shop = ({ addToCart }) => {
  return (
   <>
    <Products addToCart={addToCart} />
   </>
  )
}

export default Shop