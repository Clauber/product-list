import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import ProductsList from "./components/products-list/products-list.component";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsList />
    </div>
  );
}

export default App;
