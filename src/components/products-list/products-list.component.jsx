import React, { useState } from "react";
import { productsSeeder } from "../../commons/products";
import "./products-list.style.scss";
import { Button } from "react-bootstrap";
import Product from "../product/product.component";
import SortProducts from "../sort-products/sort-products.component";
import AddProduct from "../add-product/add-product.component";
const SORTING_OPTIONS = {
  ID: {
    name: "Default",
    value: "ID",
    key: "id",
  },
  TITLE: {
    name: "Title",
    value: "TITLE",
    key: "title",
  },
  PRICE: {
    name: "Price",
    value: "PRICE",
    key: "price",
  },
  QUANTITY: {
    name: "Quantity",
    value: "Quantity",
    key: "quantity",
  },
};
const ProductsList = () => {
  const [productsList, setProductsList] = useState(productsSeeder);
  const [currentSort, setCurrentSort] = useState(SORTING_OPTIONS.ID.value);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  //Action to take to add a product to the list
  const addProduct = (newProduct) => {
    const tempArray = [...productsList];
    newProduct.id = tempArray.length;
    tempArray.push(newProduct);
    setProductsList(tempArray);
    toggleIsAddingProduct();
  };
  //Toggle is Adding Product state
  const toggleIsAddingProduct = () => {
    setIsAddingProduct(!isAddingProduct);
  };

  const updateProduct = (productUpdate) => {
    const tempArray = [...productsList];
    let productIndex = tempArray.findIndex(
      (currentContact) => currentContact.id === productUpdate.id
    );
    tempArray[productIndex] = productUpdate;
    setProductsList(tempArray);

    clearSelectedProduct();
  };
  //We will use this after we are done editing and when we cancel the product edit
  const clearSelectedProduct = () => {
    setSelectedProduct(null);
    if (isAddingProduct) {
      toggleIsAddingProduct();
    }
  };

  /**
   *
   * @param {SORTING_OPTIONS} newSort The new sorting option to be used
   */
  const updateCurrentSort = (newSort) => {
    if (newSort.value === currentSort) {
      return;
    } else {
      let tempArray = productsList.sort((a, b) => {
        let tempA = a[newSort.key];
        let tempB = b[newSort.key];
        if (typeof tempA === "string" && typeof tempB === "string") {
          tempA = tempA.toLowerCase();
          tempB = tempB.toLowerCase();
        }
        if (tempA > tempB) {
          return 1;
        } else if (tempA < tempB) {
          return -1;
        }
        return 0;
      });
      setCurrentSort(newSort.value);
      setProductsList(tempArray);
    }
  };

  return (
    <div id="product-list">
      {isAddingProduct || selectedProduct ? (
        <AddProduct
          selectedProduct={selectedProduct}
          onAdd={addProduct}
          onEdit={updateProduct}
          onCancel={clearSelectedProduct}
        />
      ) : null}

      <div className="options">
        <SortProducts
          sortingOptions={SORTING_OPTIONS}
          currentSort={currentSort}
          updateSort={updateCurrentSort}
        />
        {!isAddingProduct && !!!selectedProduct ? (
          <Button onClick={toggleIsAddingProduct}>Add New Product</Button>
        ) : null}
      </div>

      {productsList.map((product, key) => (
        <Product key={key} product={product} onEdit={setSelectedProduct} />
      ))}
    </div>
  );
};

export default ProductsList;
