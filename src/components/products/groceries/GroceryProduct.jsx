/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const GroceryProduct = ({ product }) => (
  <>
    <Card className="bg-white" style={{ borderRadius: '3px' }}>
      <div className="py-3 px-3 bg-white">
        <Link to={`/groceries/${product.id}`} className="text-decoration-none">
          <div className="latest-product">
            <img src={product.image} className="latest-product-img card-img mx-auto" alt="Grocery Item" />
          </div>
        </Link>
        <div className="card-body">
          <div className="d-flex justify-between">
            <Link to={`/groceries/${product.id}`} className="text-decoration-none">
              <p className="card-title text-dark" style={{ fontSize: '16px', fontWeight: '400' }}>{product.title}</p>
            </Link>
            <span className="ml-auto">
              <Heart size={25} className="text-warning" style={{ cursor: 'pointer' }} />
            </span>
          </div>
          <div className="card-text text-dark">
            <h5 style={{ fontSize: '18px', fontWeight: '500' }}>
              $
              {product.price}
            </h5>
          </div>
          <button type="button" className="btn btn-block btn-outline-primary" style={{ fontSize: '14px', fontWeight: '500' }}>Add To Cart</button>
        </div>
      </div>
    </Card>
  </>
);

export default GroceryProduct;