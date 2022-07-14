import ProductCategory from "./ProductCategory";
import ProductItems from "./ProductItems";

export default function ProductList(props) {
  let categories = [];

  return (
    <div>
      <header>
        <span>Name</span>
        <span>Price</span>
        <span>{props.isStocked}</span>
      </header>
      {/* <ProductCategory category={props} /> */}
      <ProductItems
        products={props.products}
        isStocked={props.isStocked}
        filterText={props.filterText}
      />
    </div>
  );
}
