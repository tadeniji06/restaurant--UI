import React from "react";
import MenuHeader from "../components/MenuHeader";
import MenuLists from "../components/MenuLists";
import Footer from "../components/Footer";

const Menu = () => {
  return (
    <div>
      <MenuHeader title={"Our Menu"} />
      <MenuLists />
      <Footer />
    </div>
  );
};

export default Menu;
