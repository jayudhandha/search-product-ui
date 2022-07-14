import classes from "./ProductItems.module.css";

export default function ProductItems(props) {
  function products() {
    const items = props.products.map((prod) => {
      if (props.isStocked && !prod.stocked) {
        return null;
      }
      const text = props.filterText;
      if (text.trim() !== "" && prod.name.indexOf(text) == -1) {
        return null;
      }
      return (
        <div>
          <span
            className={
              prod.stocked ? classes.prodLabel : classes.prodLabelNoStock
            }
          >
            {prod.name}{" "}
          </span>
          <span className={classes.prodLabel}>{prod.price}</span>
        </div>
      );
    });

    return <ul>{items}</ul>;
  }

  return <div>{products()}</div>;
}
