import React from 'react';
import { useCart } from './CartContext';

const Product = ({ product }) => {
  const { addItemToCart } = useCart();

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.thumbnail} alt={product.title} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text"><small className="text-muted">Price: ${product.price}</small></p>
            <button className="btn btn-primary" onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
