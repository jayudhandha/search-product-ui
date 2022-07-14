import { useState } from "react";
import ProductList from "./ProductList";
import Searchbar from "./Searchbar";

const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

export default function ProductTable() {
  const [filterText, setFilterText] = useState("");
  const [isStocked, setIsStocked] = useState(false);

  function toggleStockedProd(value) {
    setIsStocked(value);
  }

  function applyFilterText(value) {
    setFilterText(value);
  }

  return (
    <div>
      <Searchbar
        onToggleStockedProd={toggleStockedProd}
        onAapplyFilterText={applyFilterText}
      />
      <ProductList
        products={products}
        isStocked={isStocked}
        filterText={filterText}
      />
    </div>
  );
}
