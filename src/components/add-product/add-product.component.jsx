import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Product } from "../../commons/products";
import "./add-product.style.scss";
const AddProduct = ({ onAdd, onEdit, selectedProduct, onCancel }) => {
  const [newProduct, setNewProduct] = useState(new Product());
  // This will execute every time selectedProduct has changed
  useEffect(() => {
    if (!!selectedProduct) {
      setNewProduct({ ...selectedProduct });
    } else {
      setNewProduct(new Product());
    }
  }, [selectedProduct]);

  const updateItem = (e) => {
    //If there's a specific pattern for the field we want to make sure the new key follows the pattern
    if (e.target.pattern) {
      let regexp = new RegExp(e.target.pattern);
      if (regexp.test(e.target.value)) {
        setNewProduct({
          ...newProduct,
          [e.target.name]: e.target.value,
        });
      }
    } else {
      setNewProduct({
        ...newProduct,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <Form
      id="add-product-form"
      onSubmit={(e) => {
        e.preventDefault();
        selectedProduct ? onEdit(newProduct) : onAdd(newProduct);
      }}
    >
      <Form.Row>
        <Col>
          <Form.Group sm="2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Product's title"
              value={newProduct.title || ""}
              onChange={updateItem}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group sm="6">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Product's Description"
              value={newProduct.description || ""}
              onChange={updateItem}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              pattern="^[0-9\b]+$"
              name="price"
              placeholder="$"
              value={newProduct.price || ""}
              onChange={updateItem}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="text"
              pattern="^[0-9\b]+$"
              name="quantity"
              placeholder="quantity"
              value={newProduct.quantity || ""}
              onChange={updateItem}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Group>
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="image"
          placeholder="htps://image.com"
          value={newProduct.image || ""}
          onChange={updateItem}
        />
      </Form.Group>
      <Form.Group></Form.Group>
      <Row className="options">
        {selectedProduct ? (
          <Button variant="primary" type="submit">
            Update
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
        <Button
          variant="secondary"
          onClick={onCancel}
          className="cancel-button"
        >
          Cancel
        </Button>
      </Row>
    </Form>
  );
};
export default AddProduct;
