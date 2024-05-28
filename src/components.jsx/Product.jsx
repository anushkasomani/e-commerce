import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <div className='heading'><h2>{product.title}</h2></div>
      <div className='prod-img'><img src={product.image} alt={product.title} /></div>
      <div className='dis'><p>{product.description}</p></div>
      <p>Price:${product.price}</p>
      <button className='btn' onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
