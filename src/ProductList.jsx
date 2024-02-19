import React from 'react'
import productsData from './Products.json'
import Product from './Product';

const ProductList = () => {

  return (
    <div>
      <h2>Products</h2>
      {productsData.products.map((product)=>(
       
        <Product key={product.id} product={product}/>)
)}
    </div>
  );
};

export default ProductList;