import React from "react";
import { Button } from "react-bootstrap";
const Product = ({ product, onEdit }) => {
  return (
    <div className="product">
      <img
        src={!!product.image ? product.image : null}
        alt={!!product.title ? product.title : null}
        className="image"
      />
      <div className="product-description">
        <h5 className="title">{!!product.title ? product.title : null}</h5>
        <p className="description">
          {!!product.description ? product.description : null}
        </p>
        <p className="price">
          Price: ${!!product.price ? product.price : null}
        </p>
        <p className="quantity">
          Quantity: {!!product.quantity ? product.quantity : null}
        </p>
        <Button onClick={() => onEdit(product)}>Edit</Button>
      </div>
    </div>
  );
};

export default Product;
