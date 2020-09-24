import React from "react";
import ReactLogo from "../../assets/react-logo.png";
const Header = () => {
  return (
    <header className="App-header">
      <img src={ReactLogo} alt="React-logo" className="react-logo" />
      <p>Product List</p>
    </header>
  );
};

export default Header;
